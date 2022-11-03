import React, {FC, useCallback, useState, Dispatch, SetStateAction} from 'react';
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import { ErrorSnackBar } from './styles/Error.style';
import { GlobalStyles } from './styles/Global.style';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import ChronFeed from './components/ChronFeed';
import { Image } from './types/image';
import axios from 'axios'
import { processData } from './utils/helpers';
import RandomFeed from './components/RandomFeed';

const API_KEY = process.env.REACT_APP_API_KEY;
const APOD_URL = 'https://api.nasa.gov/planetary/apod';

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const baseUrl = `${APOD_URL}?api_key=${API_KEY}`;

  const fetchImages = useCallback(
    async (url: string, setState: Dispatch<SetStateAction<Image[]>>) => {
      setIsLoading(true);
      try {
        const {data} = await axios.get(url);
        const processedData = processData(data);
        setState((prev: Image[]) => prev.concat(processedData));
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
          setTimeout(() => {
            setErrorMessage('');
          }, 10000);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <main>
      <GlobalStyles />
      <Header />
      {isLoading && <Loader/>}
      {errorMessage && <ErrorSnackBar error={errorMessage} />}
      <Routes>
        <Route path='/' element={<ChronFeed
            baseUrl={baseUrl}
            fetchData={fetchImages}
            isLoading={isLoading}
          />}/>

          {/* <ChronFeed
            baseUrl={baseUrl}
            fetchData={fetchImages}
            isLoading={isLoading}
          /> */}

        
          <Route path='/random' element={<RandomFeed
              baseUrl={baseUrl}
              fetchData={fetchImages}
              isLoading={isLoading}/>}/>

      </Routes>
      <Footer />
    </main>
  );
}

export default App;
