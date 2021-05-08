// Doc: 
//     - api youtube: https://developers.google.com/youtube/v3/docs/playlists
//     - axios : https://www.npmjs.com/package/axios
//     - token_google : https://developers.google.com/youtube/v3/getting-started

const axios = require('axios')
require('dotenv').config()

// Resssort les infos d'une vidéo
const videos = axios
    .get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            id: 'wsbUuTGxJ0M', // id de la video
            key: process.env.TOKEN_YT_API || "your_api_token",
            part: 'snippet,contentDetails,statistics,status'
        }
    }).then(res => {
        console.log(res.data.items[0])
    }).catch((error) => {
        console.log(error);
    })

// Ressorts les infos d'une chaine
// const channels = axios
//     .get('https://www.googleapis.com/youtube/v3/channels', {
//         params: {
//             id: 'UCWedHS9qKebauVIK2J7383g', // id de la chaine
//             key: process.env.TOKEN_YT_API || "your_api_token",
//             part: 'snippet,contentDetails,statistics,status'
//         }
//     }).then(res => {
//         console.log(res.data.items[0])
//     }).catch((error) => {
//         console.log(error);
//     })

// Ressort les playlist d'une chaine
// const playlistChannels = axios
//     .get('https://www.googleapis.com/youtube/v3/playlists', {
//         params: {
//             part: 'snippet,contentDetails',
//             channelId: 'UCyamXi0qEQJghCjJbj__aWQ', // id de la playlist
//             maxResults: 5,
//             key: process.env.TOKEN_YT_API || "your_api_token"
//         }
//     }).then(res => {
//         console.log(res.data.items)
//     }).catch((error) => {
//         console.log(error);
//     })

// Ressort les videos d'une playlist
// const playlistItems = axios
//     .get('https://www.googleapis.com/youtube/v3/playlistItems', {
//         params: {
//             part: 'snippet,contentDetails',
//             playlistId: 'PLp4yPt3crmnHb4C0pJc-l89R3SuY2YZBo', // id de la playlist
//             maxResults: 5,
//             key: process.env.TOKEN_YT_API || "your_api_token"
//         }
//     }).then(res => {
//         console.log(res.data.items[0])
//     }).catch((error) => {
//         console.log(error);
//     })

