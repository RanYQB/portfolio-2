import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import SkillsPage from './SkillsPage';
import ProjectPage from './ProjectPage';
import PresentationPage from './PresentationPage'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/presentation' element={<PresentationPage/>}/>
          <Route path='/competences' element={<SkillsPage/>}/>
          <Route path='/realisations' element={<ProjectPage/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </div>
    );
  }

}

export default App;
