import React, { useState, useEffect } from 'react';
import EpisodeList from '../components/EpisodeList';
import EpisodeDetail from '../components/EpisodeDetail';

const EpisodeContainer = () => {
    const [episodes, setEpisodes] = useState ([]);
    const [selectedEpisode, setSelectedEpisode] = useState (null);

    useEffect(() => {
        getEpisodes();
    }, [])

const getEpisodes = function () {
    fetch('https://api.sampleapis.com/simpsons/episodes')
    .then(res => res.json())
    .then(episodes => setEpisodes(episodes))
}

const onEpisodeClicked = function(episode) {
    console.log(episode);
    setSelectedEpisode(episode);        
}



    return (
        <div className = "main-container">
             {selectedEpisode ? <EpisodeDetail episode={selectedEpisode}/> : null}
            <EpisodeList episodes={episodes} onEpisodeClicked = {onEpisodeClicked}/>
        </div>
    )

}



export default EpisodeContainer;