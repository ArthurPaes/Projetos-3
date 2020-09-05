import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Character from '../pages/Character';
import Details from '../pages/Details';
import Species from '../pages/Species';
import Vehicles from '../pages/Vehicles';
import Starships from '../pages/Starships';
import Homeworlds from '../pages/Homeworlds';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/character/:character+" component={Character} />
    <Route path="/Details/:Details+" component={Details} />
    <Route path="/Species/:Species+" component={Species} />
    <Route path="/Vehicles/:Vehicles+" component={Vehicles} />
    <Route path="/Starships/:Starships+" component={Starships} />
    <Route path="/Homeworlds/:Homeworlds+" component={Homeworlds} />
  </Switch>
);

export default Routes;
