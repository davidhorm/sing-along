# SING-ALONG

Display lyrics along side (currently holiday) music videos to sing-along to.

Deployed at https://davidhorm.github.io/sing-along


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Since the only "business rule" is to display YouTube videos and lyrics, there aren't any unit tests to update.

## Adding a new song

1. Add Music Video info to `src\MusicVideos.ts`
2. Create lyrics file at `public\lyrics\<song title> - <song artist>.lrc` with [LRC file format](https://en.wikipedia.org/wiki/LRC_(file_format))
   1. Note: if the Music Video info has `cc: true`, the no lyrics file is expected.

## Creating a `.lrc` file

1. Navigate to `https://davidhorm.github.io/sing-along/#/<video id>/edit`
2. Paste in the lyrics in the textarea
3. Play the video
4. Press the "Set Time" button to timestamp the lyrics line.
   1. NOTE: Can also focus on the button, and use the space bar for timestamping instead.
5. Copy the timestamped lyrics text to `.lrc` file.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Special Thanks to Sponsors

Thanks to the following companies to help us to achieve our goals providing free open source licenses. Every company provides enough resources to move this project forward.

| Company                                                                                                                      | License                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![browserstack](https://www.vectorlogo.zone/logos/browserstack/browserstack-ar21.svg)](https://www.browserstack.com/)       | BrowserStack is a testing platform that provides the ability to test websites and mobile apps across on-demand browsers, operating systems and real mobile devices. Open Source projects get unlimited access to BrowserStack products. |
| [![VectorLogo.Zone](https://www.vectorlogo.zone/logos/vectorlogozone/vectorlogozone-ar21.svg)](https://www.vectorlogo.zone/) | VectorLogo.Zone has 3,000+ gorgeous SVG logos, perfect for your README or credits page. They offer hotlinking of logos (like the logos in this README!)                                                                                 |
