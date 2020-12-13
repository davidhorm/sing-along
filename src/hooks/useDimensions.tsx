export const useDimensions = () => {
    // EXTRA CREDIT: get fancy with reading video size ratio
    const clientHeight = document.getElementsByTagName('html')[0].clientHeight;
    const videoHeightRatio = 0.8;
    const videoHeight = clientHeight * videoHeightRatio;

    const dimensions = {
        video: {
            height: videoHeight,
            width: videoHeight / 9 * 16,
        },
        caption: {
            height: clientHeight * (1 - videoHeightRatio)
        }
    }

    return { dimensions };
};