import ReactPlayer from 'react-player'
import playButton from '../../images-logos/playButton.png'

const VideoComponent = ({ width = 100, height = 762, videoSrc, light, playButtonParams = { width, height } }) => {
    return (
        <ReactPlayer
            style={{ margin: 'auto' }}
            controls={true}
            url={videoSrc}
            width={`${width}%`}
            height={height}
            playIcon={<img src={playButton} alt='playBtn' width={playButtonParams.width} height={playButtonParams.height} />}
            light={light}
        />
    )
}

export default VideoComponent
