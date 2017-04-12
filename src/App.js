import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Sebs"/>
      <HelloWorld name="Whit"/>
    </div>
  );
};

export default App;