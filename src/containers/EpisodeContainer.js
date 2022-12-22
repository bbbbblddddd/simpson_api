import React, { useState, useEffect } from 'react';
import EpisodeList from '../components/EpisodeList';
import EpisodeDetail from '../components/EpisodeDetail';
import EpisodeSelector from '../components/EpisodeSelector';
import Episode from '../components/Episode';

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

// const onEpisodeSelected = function (episode) {
//     setEpisodeSelected(episode)
// }


    return (
        <div className = "main-container">
            <EpisodeList episodes={episodes} onEpisodeClicked = {onEpisodeClicked}/>
            {selectedEpisode ? <EpisodeDetail episode={selectedEpisode}/> : null}
        </div>
    )

}



export default EpisodeContainer;