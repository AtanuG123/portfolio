
import './App.css';
import React,{ Component } from "react";

import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Home from './component/home';
export default class App extends Component {
  render(){

    return (
      <div >
        <Router>
        <Home/>
       
        </Router>
    </div>
  );
}
}


