import React from "react";
import {render} from "react-dom";
import {HashRouter} from 'react-router-dom'
import {AppContainer} from "react-hot-loader";
import { Provider } from 'react-redux';
import Routes from './router'
import store from './redux/main'
import "./normalize.css"

const renderApp = App => {
  render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
          <App/>
        </HashRouter>
      </Provider>  
    </AppContainer>,
    document.getElementById("root")
  );
};
if (module.hot) {
  module.hot.accept(() => renderApp(Routes));
}

renderApp(Routes);

