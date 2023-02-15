import classes from "../CaverPage/CaverPage.module.css"
import ReactPlayer from "react-player";
import   AudioList from "../Player/PlayList.jsx" ;
export const audioSource = (linkAuidio, linkName) => {
    return (
      <div>
        <p>{linkName}</p>
        <audio controls className={linkAuidio ? '' : classes.mediaHidden}
          src={linkAuidio} type="audio/mpeg" />
      </div>
    )
  }

  export const videoSource = (linkVideo, linkName) => {
    return (
        <div>
    <p>{linkName}</p>
    {linkVideo.includes('youtu.be') ? <ReactPlayer className={linkVideo ? '' : classes.mediaHidden} id={classes.videoFrame} url={linkVideo} controls={true} /> 
    :  <video className={[classes.videoBlock, linkVideo ? '' : classes.mediaHidden].join(' ')} src={linkVideo} controls={true} type="video/mp4" ></video>}
    </div>
    )
  }
export const playList = (propSong) => {
  return (
     propSong.length <= 1 ? null : (
  <AudioList songs={propSong}></AudioList>)
  )
 
} 

export const tzitata = (imgLink) => {
  return (
    <div className={classes.tziTata}>
       {
      imgLink.includes('http') ? <img className={classes.tziImage} src={imgLink} width={80} alt="Цитаты" />
        : <p>{imgLink}</p>
    }
    </div>
   
  )
}
