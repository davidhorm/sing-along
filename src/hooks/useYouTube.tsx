import React from 'react';
import YouTubePlayer from 'youtube-player';
import { Options } from 'youtube-player/dist/types';

const getYouTubePlayerOptions = (): Options => ({
    playerVars: {
        cc_load_policy: 1, // show closed captions
        iv_load_policy: 3, // remove video annotations
        playsinline: 1, // disable auto-fullscreen in iOS
        modestbranding: 1, // remove YouTube icon in bottom corner
    }
});

type useYouTubeProps = {
    divId?: string;
    videoId: string;
    videoWidth?: number;
    videoHeight?: number;
}
export const useYouTube = ({ divId, videoId, videoWidth, videoHeight }: useYouTubeProps) => {
    const [milliseconds, setMilliseconds] = React.useState(0);

    React.useEffect(() => {
        const playerOptions = getYouTubePlayerOptions();
        const player = YouTubePlayer(divId || videoId, playerOptions);
        videoWidth && videoHeight && player.setSize(videoWidth, videoHeight);
        player.loadVideoById(videoId);

        let timer: ReturnType<typeof setInterval>;
        const startTimer = async () => {
            const seconds = await player.getCurrentTime();
            setMilliseconds(seconds * 1000);
            const increment = 100; // ms // EXTRA CREDIT: adjust interval based on `player.getPlaybackRate()`.
            timer = setInterval(() => {
                setMilliseconds(value => value + increment)
            }, increment);
        };

        const stopTimer = () => clearInterval(timer);

        const handleStateChange = (event: any) => {
            const { PLAYING, PAUSED, ENDED } = (window as any).YT.PlayerState;
            switch (event.data) {
                case PLAYING:
                    startTimer();
                    break;
                case PAUSED:
                case ENDED:
                    stopTimer();
                    break;
            }
        };

        const listener = player.on('stateChange', handleStateChange);

        return () => {
            stopTimer();
            (player as any).off(listener);
            player.destroy();
        };
    }, [divId, videoId, videoWidth, videoHeight]);

    return { milliseconds };
}