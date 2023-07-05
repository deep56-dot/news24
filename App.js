
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import './App.css';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
// import weather from './weather';
export class App extends Component {
  render() {
    return (
      <>    
      <Router>
      <Navbar/>
      <Weather />
      <Routes>
      <Route exact path='/' element={<News key='general' category='general'/>}></Route>
      <Route exact path='/business' element={<News category='business' key='business'/>}></Route>
      <Route exact path='/entertainment' element={<News category='entertainment' key='entertainment'/>}></Route>
      <Route exact path='/health' element={<News category='health' key='health'/>}></Route>
      <Route exact path='/science' element={<News category='science' key='science'/>}></Route>
      <Route exact path='/sports' element={<News category='sports' key='sports'/>}></Route>
      <Route exact path='/technology' element={<News category='technology' key='technology'/>}></Route>
      </Routes>
      </Router>
      </>
      
    )
  }
}
export default App
