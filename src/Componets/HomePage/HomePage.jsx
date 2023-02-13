import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from "./HomePage.module.css"
import "../UI/Mobile.css"
class HomePage extends Component {
  render() {
    
    const imgUrl = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/hCt0S48quzmrd5UvXCLw/pub/zkUB0uQKXYLodXoW4yVT.jpg"
    const imgAlt = "Каверы Подземки"
    const frontAudio = "https://drive.google.com/uc?export=download&id=13HBh3g6EUps-8KvxxRouL1CXyJXgxYS1";
    const imgTzi = "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/hCt0S48quzmrd5UvXCLw/pub/rOvh9WvUjtVqJnmEvL2L.png"
    return (
      <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">

        <div>
        <Link to={"/cavers"}
         className={classes.navLink}>Слушаем!</Link>
        
        <div className= {classes.main}>
          
  <div className= {classes.article}><p >💥💥Хелависа 💥💥</p></div>
  <div className= {classes.article}><img src={imgUrl} width={100} alt={imgAlt} /></div>
  <div className= {classes.article}><audio controls src={frontAudio} type="audio/mpeg" /></div>
  
  <div className= {classes.article}><img  style={{ borderRadius: "0rem 0rem 2rem 2rem"}} src={imgTzi} width={100} alt="Каверы Подземки" /> </div>
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
      
      
    );
  }
}

export default HomePage;