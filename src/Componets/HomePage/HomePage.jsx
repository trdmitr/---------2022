import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from "./HomePage.module.css"
import "../UI/Mobile.css"
class HomePage extends Component {
  render() {
    
    const imgUrl = "https://sun9-43.userapi.com/impg/KS0tTOpqMFxFVQsgPkAbRiUJRgX7b3hOhxCqKw/eqWc8MlLk5U.jpg?size=654x765&quality=96&sign=69e83b13bca8a2a497f89233c497880d&type=album"
    const imgAlt = "Каверы Подземки"
    const frontAudio = "https://drive.google.com/uc?export=download&id=1U3M7aGhmpFQHd3SNNupwghkrQagbRKq2";
    const imgTzi = "https://sun9-44.userapi.com/impg/eASuEJxjU8fNwDVeeeICjbW9uRNDMLSw5oI6AA/m5kjDPK-TyM.jpg?size=523x202&quality=96&sign=49d2ca70dcc170e14a7d68bb83569255&type=album"
    return (
      <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">

        <div>
        <Link to={"/cavers"} className={classes.navLink}>Слушаем!</Link>
        
        <div className= {classes.main}>
  <div className= {classes.article}><p >Вот и всё что было...</p></div>
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