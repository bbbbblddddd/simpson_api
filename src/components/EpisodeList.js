import React from 'react';
import Episode from './Episode'

const EpisodeList = ({episodes, onEpisodeClicked}) => {
    const episodeItems = episodes.map((episode, index) => {
        return <Episode name={episode.name} onEpisodeClicked = {onEpisodeClicked}/>
    })


return (

    <ul>
        {episodeItems}
    </ul>
)}

export default EpisodeList