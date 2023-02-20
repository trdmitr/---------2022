import React from "react";
import Modal from "../Modal/ModalR";
import "../UI/Mobile.css"
// import Loader from "../Loader/Loader";
import classes from "./CaverPage.module.css"
import { Link } from "react-router-dom";
import Img from "../UI/Img";
// import AudioList from "../Player/PlayList"
import {audioSource, tzitata} from "../Utils/singContent"
import {videoSource} from "../Utils/singContent"
import {playList} from "../Utils/singContent"
// import { Suspense } from "react";

class CaverPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      songs: [0],
      show: false,
      selected: undefined,
      songsEror: "",
      playList2: ""
    }
  
  }
  handleShowDialog = (id) => {
    this.setState({ ...this.state, selected: id, show: true });
  };
  handleHideDialog = () => {
    this.setState({ ...this.state, show: false });
  };
  render() {
    return (
      <div className="device device-iphone-x">
        <div className="device-frame">
          <div className="device-content">
            <div className={classes.row}>
              <div className={classes.column50}>
                {
                  this.props.songs.map((song) => (
                    <div className={classes.media}
                      key={song.id} >
                      <div className={classes.mediaImage_modal} onClick={() => {
                        this.handleShowDialog(song.id);
                      }} >
                        <Img imgUrl={song.photo} imgAlt={song.name} />
                      </div>
                      <span>{song.name}
                      </span>
                      {this.state.show && this.state.selected === song.id && (
                        <Modal show={this.state.show}
                          songs={this.state.songs} selId={this.state.selected}
                          style={{ position: "absolute" }}
                          animation={true}>
                          <button close={this.state.close} className="toggle-button" onClick={this.handleHideDialog}>
                            X
                          </button>
                          <div className={classes.mediaSong} key={song.id}>
                            <img className={classes.mediaImage_modal} src={song.photo} width={80} alt={song.name} />
                            <div className={classes.headerSong}>
                              <p>{song.name}</p></div>
                            <a className={[classes.linkTo, song.linkTo ? '' : classes.mediaHidden].join(' ')} href={song.linkTo} target="_blank" rel="noopener noreferrer"> Канал исполнителя </a>
                            <div className=
                              {
                                classes.audioBlock
                              }>
                              {audioSource(song.audio1, song.audio_name1)}
                              {audioSource(song.audio2, song.audio_name2)}
                              {audioSource(song.audio3, song.audio_name3)}
                              {audioSource(song.rezAudio2, song.rezAudio1)}
                            </div>
                            <div className=
                              {
                                classes.videoBlock
                              }>
                              {videoSource(song.video1, song.video_name1)}
                              {videoSource(song.video2, song.video_name2)}
                              {videoSource(song.video3, song.video_name3)}
                            </div>
                            {tzitata(song.picture)}                        
                          </div>
                        </Modal>
                      )}
                    </div>
                  )
                  )
                }
                <div>                 
                  {playList(this.props.songs)}
                  <Link to="/">
                    <button className={classes.btnHome}>Home</button>
                  </Link>
                </div>
                <a className={[!this.state.show ? classes.linkTo : classes.mediaHidden].join(' ')} 
                href="https://trdmitr.github.io/alltributes/#/" target="_blank" rel="noopener noreferrer"> Все трибьюты </a>
              </div>
            </div>
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header">
          <div className="device-sensors"></div>
        </div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    )
  }
}

export default CaverPage;
