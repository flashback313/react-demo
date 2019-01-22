import React from 'react';
import { Route, Switch } from 'react-router';
import ModuleA from './ModuleA';
import ModuleB from './ModuleB';
import NavBar from '../components/NavBar';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={() => (<div>11111</div>)} />
      <Route path="/a" component={() => (<div>aaaaaaa</div>)} />
      <Route path="/b" component={() => (<div>bbbbbbb</div>)} />
      <Route path="/c" component={() => (<div>ccccccc</div>)} />
      <Route component={() => (<div>no page</div>)} />
    </Switch>
  </div>
);

export default routes;
