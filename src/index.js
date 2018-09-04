
import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router } from 'react-router-dom'
import {AppContainer} from "react-hot-loader";
import { Provider } from 'react-redux';
import Routes from './router'
import store from './redux/main'
import "./normalize.css"


const renderApp = App => {
  render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App/>
        </Router>
      </Provider>  
    </AppContainer>,
    document.getElementById("root")
  );
};
if (module.hot) {
  module.hot.accept(() => renderApp(Routes));
}

renderApp(Routes);

