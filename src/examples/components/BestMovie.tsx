import React, { useState } from 'react';
import { BestMovieService } from '../services/BestMovieService';

export const BestMovie = () => {
  const [movieTitle, setMovieTitle] = useState('');

  const clickHandler = async () => {
    setMovieTitle((await BestMovieService.getMovie()).title);
  };

  return (
    <div>
      <div>
        <button onClick={clickHandler}>What is the best StarWars movie?</button>
      </div>
      <div>{movieTitle}</div>
    </div>
  );
};
