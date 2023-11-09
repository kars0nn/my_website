/* 
    Excuse the code in this file
    I wrote it last year and am using it now
    because it's too late to write new code.
*/

/* 
    This code is from another project I made,
    tnbk.cc
*/

import Updater from 'spotify-oauth-refresher'
require('dotenv').config();
let api = new Updater({ clientId: process.env.CLIENT_ID, clientSecret: process.env.CLIENT_SECRET });

export async function getSong() {
    try {
        api.setAccessToken(process.env.ACCESS_TOKEN)
        api.setRefreshToken(process.env.REFRESH_TOKEN)
    } catch (error) {
        console.log("Spotify Token Error.")
        return { error: "Problem setting Access token or Refresh token for fetching music activity." }
    }

    async function getRecent() {
        const songFetchRecent = await api.request({
            url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            method: "get",
            authType: "bearer",
        }).catch(error => {
            console.log(error)
            return null
        })

        songFetchRecent.data.items[0].available_markets = []
        songFetchRecent.data.items[0].track.available_markets = []

        if (songFetchRecent === null) {
            return null
        } else {
            return formatSong(songFetchRecent.data)
        }
    }

    async function getCurrent() {
        const songFetchCurrent = await api.request({
            url: "https://api.spotify.com/v1/me/player/currently-playing",
            method: "get",
            authType: "bearer",
        }).catch(error => {
            console.log(error)
            return null
        })

        if (songFetchCurrent === null) {
            return null
        } else {
            if(songFetchCurrent?.data?.item?.id) {
                const features = await api.request({
                    url: `https://api.spotify.com/v1/audio-features/${songFetchCurrent?.data?.item?.id}`,
                    method: "get",
                    authType: "bearer",
                }).catch(error => {
                })
    
                songFetchCurrent.data.features = features?.data ? features?.data : null
                songFetchCurrent.data.item.available_markets = []
                songFetchCurrent.data.actions = []
                songFetchCurrent.data.context = []

                return formatSong(songFetchCurrent.data)
            } else {
                return formatSong(songFetchCurrent.data)
            }
        }
    }

    let song;
    song = await getCurrent()

    return song === '' ? await getRecent() : song;
}

export async function formatSong(song) {
    if(song.items) {
        song = {
            name: song.items[0].track.name ?? 'No Song Name',
            album_cover: song.items[0].track.album.images[1].url ?? 'https://tnbk.cc/assets/icons/icon-512x512.png',
            artist_name: song.items[0].track.artists[0].name ?? 'No Artist Name',
            album_name: song.items[0].track.album.name ?? 'No Album Name',
            explicit: song.items[0].track.explicit ?? false,
            url: song.items[0].track.external_urls.spotify ?? 'https://tnbk.cc',
            artist_url: song.items[0].track.artists[0].external_urls.spotify ?? 'https://tnbk.cc',
            album_url: song.items[0].track.album.external_urls.spotify ?? 'https://tnbk.cc',
            album_type: song.items[0].track.album.album_type ?? 'Single',
            preview_url: song.items[0].track.preview_url ?? 'https://tnbk.cc',
            is_playing: false,
            features: {}
        }
    } else if (song.item) {
        song = {
            name: song.item.name ?? 'No Song Name',
            album_cover: song.item.album.images[1].url ?? 'https://tnbk.cc/assets/icons/icon-512x512.png',
            artist_name: song.item.artists[0].name ?? 'No Artist Name',
            album_name: song.item.album.name ?? 'No Album Name',
            explicit: song.item.explicit ?? false,
            url: song.item.external_urls.spotify ?? 'https://tnbk.cc',
            artist_url: song.item.artists[0].external_urls.spotify ?? 'https://tnbk.cc',
            album_url: song.item.album.external_urls.spotify ?? 'https://tnbk.cc',
            album_type: song.item.album.album_type ?? 'Single',
            preview_url: song.item.preview_url ?? 'https://tnbk.cc',
            is_playing: true,
            features: song.features ?? {error:"nothing"}
        }
    }
    return song
}