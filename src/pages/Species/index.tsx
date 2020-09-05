/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title, Button,
} from './styles';

interface SpeciesParams{
  Species: string;
}

interface SpeciesInfo {

      name: string;
      classification:string;
      designation:string;
      average_lifespan:string;

}

const Species: React.FunctionComponent = () => {
  const [species, setSpecies] = useState<SpeciesInfo | null>(null);

  const { params } = useRouteMatch<SpeciesParams>();

  useEffect(() => {
    api.get(`${params.Species}`).then((response) => {
      setSpecies(response.data);
    });
  }, [params.Species]);

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
            <strong>{species?.name}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>Classification: {species?.classification}</p>
            <p>Designation: {species?.designation}</p>
            <p>Average Lifespan:  {species?.average_lifespan}</p>

          </li>

        </ul>
      </Info>

    </>
  );
};

export default Species;
