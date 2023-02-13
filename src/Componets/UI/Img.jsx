import React from 'react'
import Loader from "../Loader/Loader";

export default class Img extends React.Component{

   constructor(props) {
    super(props);
    this.state = { 
     url: ""
	};
    
  }
 componentDidMount() { 
  const app = async () => {
    const obj = await fetch(this.props.imgUrl)
    .then(response => response.blob())
    .then((image) => {
          this.setState({url: URL.createObjectURL(image)});     
        });
  }
  app()
}
    render() {
        if (!this.state.url){
    return <Loader/>;
  }
	return <img src = {this.props.imgUrl} alt={this.props.imgAlt}/>;
	}   
  
}
