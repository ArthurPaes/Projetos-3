/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title, Button,
} from './styles';

interface HomeworldsParams{
  Homeworlds: string;
}

interface HomeworldsInfo {

     name: string;
     rotation_period:number;
     orbital_period:number;
     diameter: number;
     climate: string;
     terrain:string;
     population:number;

}

const Details: React.FunctionComponent = () => {
  const [homeworlds, setHomeworlds] = useState<HomeworldsInfo | null>(null);

  const { params } = useRouteMatch<HomeworldsParams>();

  useEffect(() => {
    api.get(`${params.Homeworlds}`).then((response) => {
      setHomeworlds(response.data);
    });
  }, [params.Homeworlds]);

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
            <strong>{homeworlds?.name}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>Rotation Period: {homeworlds?.rotation_period} hr</p>
            <p>Orbital Period: {homeworlds?.orbital_period} days</p>
            <p>Diameter  {homeworlds?.diameter} km</p>
            <p>Climate: {homeworlds?.climate}</p>
            <p>Population: {homeworlds?.population}</p>

          </li>

        </ul>
      </Info>

    </>
  );
};

export default Details;
