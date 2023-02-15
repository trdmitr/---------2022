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
    if (!this.props.imgUrl){
      return <Loader/>; }
     fetch(this.props.imgUrl)
     .then(function (response) {
      if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
      }
      return Promise.resolve(response)
      
    })
    .then(response =>  response.blob())
    .then((image) => {
      this.setState({url: URL.createObjectURL(image)});     
     });
     
  }
  app()
}
    render() {
      if (!this.state.url) {
        return (
          setTimeout(() =>
            <Loader />, 1000)
        )
      }
  // console.log(this.state.url)
	return <img src = {this.state.url} alt={this.props.imgAlt}/>;
	}   
}
