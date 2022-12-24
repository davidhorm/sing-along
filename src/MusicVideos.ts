export type MusicVideo = {
  videoId: string;
  songTitle: string;
  songArtist: string;
  cc?:
    | 'CLOSED_CAPTIONS' // display closed-captions in YouTube
    | 'LYRIC_VIDEO'; // don't display closed-captions or load lyric file because video has lyrics already
};

export const MusicVideos: MusicVideo[] = [
  {
    videoId: 'aAkMkVFwAoo',
    songTitle: 'All I Want for Christmas Is You',
    songArtist: 'Mariah Carey',
  },
  {
    videoId: 'k4s1wSCvs8k',
    songTitle: 'Let It Snow',
    songArtist: 'Boyz II Men ft. Brian McKnight',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'e_AMTbO50vU',
    songTitle: 'A Holly Jolly Christmas',
    songArtist: 'Burl Ives',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'DocgDlM6zHI',
    songTitle: "I'll Be Home For Christmas + Cozy Little Christmas",
    songArtist: 'Katy Perry',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: 'PF-R5ZaG71I',
    songTitle: 'Feliz Navidad',
    songArtist: 'Pee Wee & Charo',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'txw4gOK2alU',
    songTitle: 'What Christmas Means To Me',
    songArtist: 'Ciara',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: '0iAZWhOaHaM',
    songTitle: 'This Christmas',
    songArtist: 'Ne-Yo',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'g_kj60DIq2M',
    songTitle: 'Happy Xmas (War Is Over)',
    songArtist: 'John Lennon & Yoko Ono',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'tIyE3IrC7r0',
    songTitle: "Like It's Christmas",
    songArtist: 'Jonas Brothers',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: 'E8gmARGvPlI',
    songTitle: 'Last Christmas',
    songArtist: 'Wham!',
  },
  {
    videoId: 'nlR0MkrRklg',
    songTitle: 'Santa Tell Me',
    songArtist: 'Ariana Grande',
  },
  {
    videoId: 'LUjn3RpkcKY',
    songTitle: 'Mistletoe',
    songArtist: 'Justin Bieber',
  },
  {
    videoId: '7mKRN79ter8',
    songTitle: "Rockin' Around The Christmas Tree",
    songArtist: 'Ingrid Michaelson ft. Grace VanderWaal',
  },
  {
    videoId: 'wKhRnZZ0cJI',
    songTitle: 'The Christmas Song (Merry Christmas To You)',
    songArtist: 'Nat King Cole',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'wO6Kubm5tyE',
    songTitle: 'Blue Christmas',
    songArtist: 'Elvis Presley',
  },
  {
    videoId: 'sE3uRRFVsmc',
    songTitle: 'Let It Snow! Let It Snow! Let It Snow!',
    songArtist: 'Frank Sinatra',
  },
  {
    videoId: 'HTCFi4l3nkY',
    songTitle: 'Santa Baby',
    songArtist: 'Eartha Kitt',
  },
  {
    videoId: 'DkXIJe8CaIc',
    songTitle: 'Sleigh Ride',
    songArtist: 'The Ronettes',
  },
  {
    videoId: 'UwKcjAHIdJQ',
    songTitle: 'Where Are You Christmas',
    songArtist: 'Faith Hill',
  },
  {
    videoId: '5vyMuxxLsD0',
    songTitle: 'Jingle Bell Rock',
    songArtist: 'Daryl Hall & John Oates',
  },
  {
    videoId: 'mmZBC92pgrE',
    songTitle: 'Christmas (Baby, Please Come Home)',
    songArtist: 'U2',
  },
  {
    videoId: 'gcPY3RIvtCw',
    songTitle: 'Hard Candy Christmas',
    songArtist: 'Dolly Parton',
  },
  {
    videoId: 'wKj92352UAE',
    songTitle: 'Merry Christmas, Happy Holidays',
    songArtist: 'NSYNC',
  },
  {
    videoId: 'j7Tksexm680',
    songTitle: 'My Only Wish (This Year)',
    songArtist: 'Britney Spears',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: '62rmjtZdCv8',
    songTitle: 'Sleigh Ride',
    songArtist: 'TLC',
  },
  {
    videoId: 'EM2Fnp_qnE8',
    songTitle: 'Underneath the Tree',
    songArtist: 'Kelly Clarkson',
  },
  {
    videoId: 'G2bx3FzgJ6o',
    songTitle: 'Oh Santa!',
    songArtist: 'Mariah Carey ft. Ariana Grande & Jennifer Hudson',
  },
  {
    videoId: 'V3EYjVPRClU',
    songTitle: "Santa's Coming For Us",
    songArtist: 'Sia',
  },
  {
    videoId: 'YiadNVhaGwk',
    songTitle: 'Run Rudolph Run',
    songArtist: 'Chuck Berry',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'xp9rK8FmYog',
    songTitle: 'Little Saint Nick',
    songArtist: 'The Beach Boys',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'IuDUoAmhonE',
    songTitle: 'This Gift',
    songArtist: '98º',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'GP5_dJUd3BY',
    songTitle: 'Winter Wonderland',
    songArtist: 'Bing Crosby',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'qUCNAnp2QAI',
    songTitle: 'The Chanukah Song',
    songArtist: 'Adam Sandler',
  },
  {
    videoId: 'QLvvkTbHjHI',
    songTitle: "What's This",
    songArtist: 'The Nightmare Before Christmas',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'XFF99j-0e84',
    songTitle: 'Please Come Home for Christmas',
    songArtist: 'Jon Bon Jovi',
  },
  {
    videoId: 'j-_1-uJ6Ml4',
    songTitle: 'One More Sleep',
    songArtist: 'Leona Lewis',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'hLf0-lro8X8',
    songTitle: 'Jingle Bells',
    songArtist: 'Frank Sinatra',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'uoMHmsL2t3A',
    songTitle: 'Step Into Christmas',
    songArtist: 'Elton John',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: 'uSjq7x67kzM',
    songTitle: 'Driving Home For Christmas',
    songArtist: 'Chris Rea',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: '3ZT9_H4-hbM',
    songTitle: 'You Make It Feel Like Christmas',
    songArtist: 'Gwen Stefani ft. Blake Shelton',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'GV5bhZ0oZPI',
    songTitle: 'Glittery',
    songArtist: 'Kacey Musgraves ft. Troye Sivan',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'O89sPooBhyE',
    songTitle: 'I Saw Mommy Kissing Santa Claus',
    songArtist: 'Jackson 5',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'HXJcKeeXSlM',
    songTitle: 'Naughty List',
    songArtist: "Liam Payne & Dixie D'Amelio",
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'Hmw4Fu4XupE',
    songTitle: 'Frosty The Snowman',
    songArtist: 'Ella Fitzgerald',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'MaA7B9cu4kU',
    songTitle: 'Someday At Christmas',
    songArtist: 'Stevie Wonder & Andra Day',
  },
  {
    videoId: 'cbZTfrhcamA',
    songTitle: "It's the Most Wonderful Time of the Year",
    songArtist: 'Andy Williams',
  },
  {
    videoId: 'WaNwEkCeZrE',
    songTitle: "It's Beginning to Look a Lot Like Christmas",
    songArtist: 'Johnny Mathis',
  },
  {
    videoId: 'PhKVSZsRxQM',
    songTitle: 'This Christmas',
    songArtist: 'Donny Hathaway',
  },
  {
    videoId: 'RmF2rsDHOZc',
    songTitle: 'Grown-Up Christmas List',
    songArtist: 'Amy Grant',
  },
  {
    videoId: '4QJKhKNWy5o',
    songTitle: 'Take Me Home For Christmas',
    songArtist: 'Dan + Shay',
  },
  {
    videoId: 'YR1ujXx2p-I',
    songTitle: 'Merry Christmas, Darling',
    songArtist: 'The Carpenters',
  },
  {
    videoId: 'N-PyWfVkjZc',
    songTitle: 'Merry Christmas Everyone',
    songArtist: "Shakin' Stevens",
  },
  {
    videoId: 'kBXG5IpKdds',
    songTitle: 'My Kind Of Present',
    songArtist: 'Meghan Trainor',
  },
  {
    videoId: 'jXfLpDuqO6I',
    songTitle: 'Happy Holidays (The Holiday Season)',
    songArtist: 'Andy Williams ft. The Osmonds',
  },
  {
    videoId: 'UUriY3wmLuY',
    songTitle: 'When Christmas Comes',
    songArtist: 'Mariah Carey ft. John Legend',
  },
  {
    videoId: 'V8HQ-YY33ys',
    songTitle: 'Merry Christmas Baby',
    songArtist: 'Otis Redding',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: 'xWw3P_17Xw8',
    songTitle: 'Christmas Without You',
    songArtist: 'Ava Max',
  },
  {
    videoId: 'E7lqYSD22jw',
    songTitle: 'You Deserve It All',
    songArtist: 'John Legend',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: '7nLU5i5Ec7g',
    songTitle: "Christmas Isn't Canceled (Just You)",
    songArtist: 'Kelly Clarkson',
    cc: 'LYRIC_VIDEO',
  },
  {
    videoId: 'iM-EZekk72U',
    songTitle: 'Holiday Rock',
    songArtist: 'Neon Trees',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: '8Ja9JLuGryU',
    songTitle: "Baby, It's Cold Outside",
    songArtist: 'Glee',
  },
  {
    videoId: 'PPcpd-YBlGw',
    songTitle: 'Santa, Can’t You Hear Me',
    songArtist: 'Kelly Clarkson & Ariana Grande',
  },
  {
    videoId: 'bSHz5S3yIzg',
    songTitle: 'It Was A… (Masked Christmas)',
    songArtist: 'Jimmy Fallon ft. Megan Thee Stallion & Ariana Grande',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'mN3rDTAdM2o',
    songTitle: 'Christmas Tree Farm',
    songArtist: 'Taylor Swift',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'GqUp5K_sHd0',
    songTitle: 'Officially Christmas',
    songArtist: 'Dan + Shay',
  },
  {
    videoId: 'dhKseUuvC7E',
    songTitle: 'Make It To Christmas',
    songArtist: 'Alessia Cara',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'AXi1G9WhcRY',
    songTitle: '(Everybody’s Waitin’ For) The Man With The Bag',
    songArtist: 'Darren Criss ft. Adam Lambert',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'UjyKUthmIqM',
    songTitle: 'Rudolph The Red-Nosed Reindeer',
    songArtist: 'Burl lves',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: '-tJtsKngXJU',
    songTitle: 'Have Yourself A Merry Little Christmas',
    songArtist: 'Frank Sinatra',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'Q_yuO8UNGmY',
    songTitle: 'Merry Christmas',
    songArtist: 'Ed Sheeran & Elton John',
    cc: 'CLOSED_CAPTIONS',
  },
  {
    videoId: 'YBuZCwS0seE',
    songTitle: 'Christmas Wrapping',
    songArtist: 'The Waitresses',
    cc: 'LYRIC_VIDEO',
  },
];
