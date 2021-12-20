export const useDimensions = () => {
    const { clientHeight, clientWidth } = document.getElementsByTagName('html')[0];
    
    const landscapeHeightRatio = 0.8;
    const landscapeHeight = clientHeight * landscapeHeightRatio;
    const landscapeWidth = landscapeHeight * 16 / 9;
    const isWideEnough = landscapeHeight < clientWidth;

    const portraitWidth = clientWidth;
    const portraitHeight = portraitWidth * 9 / 16;

    const video = {
        height: isWideEnough ? landscapeHeight : portraitHeight,
        width: isWideEnough ? landscapeWidth : portraitWidth,
    };

    const dimensions = {
        video,
        caption: {
            height: clientHeight - video.height,
        }
    }

    return { dimensions };
};