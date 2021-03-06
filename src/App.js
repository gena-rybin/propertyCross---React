import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import SearchPage from "./components/search-page/search-page";
import ResultsPage from "./components/result-page/result-page";
import FavsPage from "./components/favs-page/favs-page";
import HeaderBlock from "./components/header/header";
import {routes} from "./services/routes";
import {NotFound} from "./components/error-page/not-found";

class App extends Component {

    handleChildSearchSubmit = () => {
        // console.log('handleChildSearchSubmit from parent !');
    };

    render() {
    return (
      <div className="App">
          <HeaderBlock></HeaderBlock>
          <Switch>
          <Route exact path={routes.root} component={SearchPage} />
          <Route exact path={routes.results} component={ResultsPage}/>
          <Route exact path={routes.favourites} component={FavsPage}/>
          <Route component={NotFound}/>
          </Switch>
      </div>
    );
  }
}

export default App;
