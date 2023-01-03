import EpisodeContainer from "../containers/EpisodeContainer"

const EpisodeDetail = ({ episode }) => {

    return (

        <div className="episode-detail">
            Title of Episode: {episode.name}
            Season: {episode.season}
            Episode Number: {episode.episodeNumber}
            Rating: {episode.rating}
            Plot: {episode.description}

           
            <img
                src={episode.thumbnailUrl}
            />

        </div>
    )
}

export default EpisodeDetail