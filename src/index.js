import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import configureStore from 'store/configureStore';
import theme from 'theme';
import App from './App';
import { SnackbarProvider } from 'notistack';

const { store } = configureStore();

store.runSaga();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
