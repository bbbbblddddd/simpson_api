import React from 'react';
import Episode from './Episode'

const EpisodeList = ({ episodes, onEpisodeClicked }) => {
    const episodeItems = episodes.map((episode) => {
        return <Episode episode={episode} onEpisodeClicked={onEpisodeClicked} key={episode.id} />
    })


    return (

        <ul>
            {episodeItems}
        </ul>
    )
}

export default EpisodeList