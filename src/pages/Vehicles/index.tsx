/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Header, Info, Title, Button,
} from './styles';

interface VehicleParams{
  Vehicles: string;
}

interface VehicleInfo {

     name: string;
     model: string;
     manufacturer:string;
     const_in_credits: string;
     length:string;
     vehicle_class:string;
     max_atmosphering_speed:number;

}

const Vehicles: React.FunctionComponent = () => {
  const [vehicles, setVehicles] = useState<VehicleInfo | null>(null);

  const { params } = useRouteMatch<VehicleParams>();

  useEffect(() => {
    api.get(`${params.Vehicles}`).then((response) => {
      setVehicles(response.data);
    });
  }, [params.Vehicles]);

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
            <strong>{vehicles?.name}</strong>
          </div>
        </header>
        <ul>
          <li>
            <p>Model: {vehicles?.model}</p>
            <p>Manufacturer: {vehicles?.manufacturer}</p>
            <p>Cost in credits:  {vehicles?.const_in_credits}</p>
            <p>Vehicle class: {vehicles?.vehicle_class}</p>
            <p>Max speed: {vehicles?.max_atmosphering_speed}</p>

          </li>

        </ul>
      </Info>

    </>
  );
};

export default Vehicles;
