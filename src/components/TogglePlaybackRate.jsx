import React from 'react'
import { useBaraja } from '../hooks/useBaraja'

function TogglePlaybackRate() {
    const { playbackRate, togglePlaybackRate } = useBaraja()


    if (playbackRate === 1) {
        return <h1 className="playbackRate" onClick={togglePlaybackRate}>Playback rate : X1</h1>
    }

    return <h1 className="playbackRate" onClick={togglePlaybackRate}>Playback rate : X2</h1>
}

export default TogglePlaybackRate