import React, { useEffect, useState } from 'react';
import { SelectDogs } from './SelectDogs';
import './style.css';

export const App = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [store, setStore] = useState([]);

  const sendRequest = (breedName: string) => {
    let url = `https://dog.ceo/api/breed/${breedName}/images/random`;

    if (breedName === '') {
      url = 'https://dog.ceo/api/breeds/image/random';
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result) => setImgUrl(result.message));
  };

  const sendRequestOne = () => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    return fetch(url)
      .then((response) => response.json())
      .then((result) => setStore(result.message));
  };

  useEffect(() => {
    sendRequestOne();
    sendRequest('');
    console.log('WHY');
  }, []);

  return (
    <div className="main">
      <SelectDogs store={store} sendRequest={sendRequest} />

      <div className="imgClass">{imgUrl && <img className="img" src={imgUrl} alt="123"></img>}</div>
      <button
        className="buttonRandom"
        onClick={() => {
          sendRequest('');
        }}
      >
        Random
      </button>
    </div>
  );
};
