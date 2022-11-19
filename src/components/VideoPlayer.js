function VideoPlayer(props) {

    if (props.video) {
        var videoId = props.video.id.videoId
        var srcs = `https://www.youtube.com/embed/${videoId}`

        return (
            <div>
                <iframe width="100%" height="400" src={srcs} title="YouTube video player"></iframe>
            </div>
        )
    } else {
        return <h1>Lading...</h1>
    }
}

export default VideoPlayer;