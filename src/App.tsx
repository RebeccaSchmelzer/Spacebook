import React from 'react';
import './App.css';
import Header from './components/Header';
import { GlobalStyles } from './styles/Global.style';

function App() {
  return (
    <main>
      <GlobalStyles />
      <Header />
    </main>
  );
}

export default App;
