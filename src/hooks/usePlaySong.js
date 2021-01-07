import { useEffect, useState } from 'react'

export const usePlaySong = ( {track} ) => {
    const [music] = useState(new Audio(''))
    const [hasPlaying, setHasPlaying] = useState(false)

    useEffect(() => {
        if(track){
            musicChange()
        }
    }, [track]) // eslint-disable-line

    const setSourceOfTrack = () => {
        music.src = track
    }

    const playMusic = () => {
        music.play()
        setHasPlaying(true)
    }

    const musicChange = () => {
        if(hasPlaying){
            music.pause()
            setSourceOfTrack()
            playMusic()
        }else {
            setSourceOfTrack()
            playMusic()
        }
    }


    return {
        music
    }
}

