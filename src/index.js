import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import App from './components/app/app';

const store =  configureStore();

ReactDOM.render(
	<Provider store={store}>
    	<App />
    </Provider>,
  document.querySelector('#app')
);
