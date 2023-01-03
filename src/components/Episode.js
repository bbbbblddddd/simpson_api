
const Episode = ({episode, onEpisodeClicked}) => {

    const handleClick = function () {
        onEpisodeClicked(episode);

    }

    return (
        <li onClick = {handleClick} className = "clickable-li">
            {episode.name}
 
        </li>
    )
}

export default Episode;