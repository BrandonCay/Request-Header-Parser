import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home';
import Data from './components/Data';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/data" exact component={Data}/>
          <Route path="/" render={()=><div>404</div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
