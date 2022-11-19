function Videolist(props) {

    const listsdata = () => {
        let m = props.listofvieos.map(video => {
            return (
                <li style={{cursor:"pointer"}} key={video.id.videoId} onClick={()=>{
                    props.updateSelectedVideo(video)
                }}>
                    <img alt="img" width="100%" src={video.snippet.thumbnails.medium.url}></img>
                    <p>{video.snippet.title}</p>
                </li>
            )
        })

        return m;
    }

    return (
        <ul style={{ listStyleType: "none" }}>
            {listsdata()}
        </ul>
    )
}
export default Videolist;