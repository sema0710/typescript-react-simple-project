import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from '../container';
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
