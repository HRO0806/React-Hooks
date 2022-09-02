import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import State from './components/State';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const background = {
  backgroundColor: '#cacaca',
  width: '100%',
  maxWidth: 'inherit',
  minHeight: '100vh',
  backgroundPosition: 'absolute'
}

function App() {
  return (
    <div style={background}>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/state' component={State}/>
        </Switch>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
