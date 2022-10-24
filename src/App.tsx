import React, {FC, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import { ErrorSnackBar } from './styles/Error.style';
import { GlobalStyles } from './styles/Global.style';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = 'https://api.nasa.gov/planetary/apod';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;


  return (
    <main>
      <GlobalStyles />
      <Header />
      {isLoading && <Loader/>}
      {errorMessage && <ErrorSnackBar error={errorMessage} />}
      <Routes>
        <Route path='/'>

        </Route>
        <Route path='/random'>

        </Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
