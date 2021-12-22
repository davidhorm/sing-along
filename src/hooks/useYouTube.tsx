import { useState, useEffect } from 'react';
import YouTubePlayer from 'youtube-player';
import { Options, YouTubePlayer as YouTubePlayerType } from 'youtube-player/dist/types';

const isIOS = () => [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document);

/**
 * 
 * @param cc 
 * @returns 0 = enable fullscreen; 1 = disable fullscreen
 */
const disableFullscreenOnIOS = (cc: boolean) => cc ? 0 : (isIOS() ? 1 : 0);

const getYouTubePlayerOptions = (cc: boolean): Options => ({
    playerVars: {
        cc_load_policy: 1, // show closed captions
        iv_load_policy: 3, // remove video annotations
        playsinline: disableFullscreenOnIOS(cc), // disable auto-fullscreen in iOS
        modestbranding: 1, // remove YouTube icon in bottom corner
    }
});

export interface useYouTubeProps {
    videoId: string;
    videoWidth?: number;
    videoHeight?: number;
    cc?: boolean;
    onVideoEnd?: Function;
}
export const useYouTube = ({ videoId, videoWidth, videoHeight, cc = false, onVideoEnd }: useYouTubeProps) => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [youTubePlayer, setYouTubePlayer] = useState<YouTubePlayerType>();

    useEffect(() => {
        const playerOptions = getYouTubePlayerOptions(cc);
        const player = YouTubePlayer(videoId, playerOptions);
        player.loadVideoById(videoId);

        setYouTubePlayer(player);

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
                    stopTimer();
                    break;
                case ENDED:
                    stopTimer();
                    onVideoEnd && onVideoEnd();
                    break;
            }
        };

        const listener = player.on('stateChange', handleStateChange);

        return () => {
            stopTimer();
            (player as any).off(listener);
            player.destroy();
        };
    }, [videoId, cc, onVideoEnd]);

    useEffect(() => {
        youTubePlayer && videoWidth && videoHeight && youTubePlayer.setSize(videoWidth, videoHeight);
    }, [youTubePlayer, videoWidth, videoHeight]);

    return { milliseconds };
}