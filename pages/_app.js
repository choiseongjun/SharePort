import AppLayout from '../components/commons/AppLayout';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const nav = ({ Component,store }) => {
   return (
    <>
      <Provider store={store}>
            <Head>
                <title>Studymate</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
      </Provider>    
    </>
   );
}; 

nav.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
  };
  
 
  const configureStore = (initialState, options) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : compose(
        applyMiddleware(...middlewares),
        !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
      );
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return store;
  };
  
  export default withRedux(configureStore)(nav);