/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title, Button,
} from './styles';

interface StarshipsParams{
  Starships: string;
}

interface StarshipsInfo {
  name: string;
     model: string;
     manufacturer:string;
     const_in_credits: string;
     length:string;
     starship_class:string;
     max_atmosphering_speed:number;

}

const Details: React.FunctionComponent = () => {
  const [starships, setStarships] = useState<StarshipsInfo | null>(null);

  const { params } = useRouteMatch<StarshipsParams>();

  useEffect(() => {
    api.get(`${params.Starships}`).then((response) => {
      setStarships(response.data);
    });
  }, [params.Starships]);

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
            <strong>{starships?.name}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>Model: {starships?.model}</p>
            <p>Manufacturer {starships?.manufacturer}</p>
            <p>Length:  {starships?.length}</p>
            <p>Starship class: {starships?.starship_class}</p>
            <p>Max speed: {starships?.max_atmosphering_speed} km/h</p>

          </li>

        </ul>
      </Info>

    </>
  );
};

export default Details;
