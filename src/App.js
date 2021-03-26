import React from 'react'
import Home  from '../src/Home/Home'
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from '../src/Home/Header/About/About'
import Header from '../src/Home/Header/Header'
import Footer from '../src/Home/Footer/Footer'
import Contact from '../src/Home/Header/Contact/Contact'
import Test from './TestForm/Test'
import Login from '../src/Home/Header/Login/Login'
import TestForm from './TestForm/Test';
class App extends React.Component {
render() {
   return (

        <div>
          <Test/>
          </div>
    //<BrowserRouter>

   //<Header/>
    //<Route exact path="/"component={Home}/>
    //<Route path="/About"component={About}/>
    //<Route path="/Contact"component={Contact}/>
    //<Route path="/Login"component={Login}/>
    //<Footer/>

    //</BrowserRouter>
   )
}
}
export default App