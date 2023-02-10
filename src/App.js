import React, { Component, Fragment } from 'react';
import CaverPage from "./Componets/CaverPage/CaverPage";
import HomePage from './Componets/HomePage/HomePage';
import SinglOne from './Componets/SinglOne/SinglOne';
import Papa from "papaparse";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function Notfound () {
  
    return (
        <div>
          <h2>404 ресурс не найден!</h2>
        </div>
    );
}
class App extends Component {
  constructor() {
    super();
  this.state = {
    songs: [0],
    songsEror: "",
  }
  this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Vmb6lazYnJQAF0HrxARNWEbWkYGngrMp4FXLT_Ym4zK4WTbYVjbb11sAqihyo932tg_CBGSVIcq4/pub?output=csv",
      {
        download: true,
        header: true,
        worker: true,
        skipEmptyLines: true,
        complete: this.updateData,
        error: (error) => {
          console.error(error);
          this.setState(error)
        }
      }
    );
  }
  updateData = (result) => {
    console.log(result.data);
    const data = result.data
    this.setState({ ...this.state, songs: data });
  }
  render() {
    return (
      <Fragment>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cavers" element={<CaverPage songs = {this.state.songs} />} />
            <Route path='/cavers/:id' element={<SinglOne />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </Fragment> 
 );
  }
}


export default App;