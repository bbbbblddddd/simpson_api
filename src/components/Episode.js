
const Episode = ({name, onEpisodeClicked}) => {

    const handleClick = function () {
        console.log({name})
        onEpisodeClicked(name);

    }

    return (
        <li onClick = {handleClick} className = "clickable-li">
            {name}
            {/* Season: {episode.season}
            Episode Number: {episode.episodeNumber}
            Rating: {episode.rating}
            Plot: {episode.description} */}
        </li>
    )
}

export default Episode;