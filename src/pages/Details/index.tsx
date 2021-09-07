/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title, Button,
} from './styles';

interface FilmParams {
  Details: string;
}

interface FilmInfo {

  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string

}

const Details: React.FunctionComponent = () => {
  const [character, setCharacter] = useState<FilmInfo | null>(null);

  const { params } = useRouteMatch<FilmParams>();

  useEffect(() => {
    api.get(`${params.Details}`).then((response) => {
      setCharacter(response.data);
    });
  }, [params.Details]);

  return (
    <>

      <Header>
        <Title>Star Wars Explorer</Title>

        <Button onClick={useHistory().goBack}>
          <FiChevronLeft size={16} />
          Back
        </Button>

      </Header>

      <Info>
        <header>

          <div>
            <strong>{character?.title}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>{character?.opening_crawl}</p>
            <p>Director: {character?.director}</p>
            <p>Producers:  {character?.producer}</p>
            <p>Release Date: {character?.release_date}</p>

          </li>

        </ul>
      </Info>

    </>
  );
};

export default Details;
