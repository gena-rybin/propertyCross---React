import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouterDOM from "react-router-dom";
import {Provider} from "react-redux";

// import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';

import {PersistGate} from "redux-persist/integration/react";
import { persistor} from "./redux/store";
import {store} from "./redux/store";

const Router = ReactRouterDOM.BrowserRouter;

ReactDOM.render(
    // <App />, document.getElementById('root')

    // <Router>
    //     <Switch>
    //         <Route exact path="/" component={App} />
    //         <Route exact path="/todo" component={TodoPage} />
    //         <Route exact path="/about" component={AboutPage} />
    //         <Route component={NotFoundPage} />
    //     </Switch>
    // </Router>,
    // document.getElementById('root')

    //<Provider store={store}>
    //    <Router>
    //        <Switch>
    //            <Route exact path="/" component={App} />
    //            {/*<Route exact path="/todo" component={TodoPage} />*/}
    //            {/*<Route exact path="/about" component={AboutPage} />*/}
    //            {/*<Route component={NotFoundPage} />*/}
    //        </Switch>
    //    </Router>
    //</Provider>,
    //document.getElementById('root')

    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
           <Router>
               <App/>
           </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')

);