import React from 'react'
import Loader from "../Loader/Loader";

export default class Img extends React.Component{

   constructor(props) {
    super(props);
    this.state = { 
     url: null
	};
    
  }
 componentDidMount() {   
    fetch(this.props.imgUrl)
      .then(response => response.blob())
      .then((image) => {
        this.setState({url: URL.createObjectURL(image)});     
      });
    }
    
    render() {
        if (!this.state.url){
    return <Loader/>;
  }
	return <img src = {this.state.url} alt={this.props.imgAlt}/>;
	}   
  
}
