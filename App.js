import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './Navigation/Navigator';
import { todoReducer } from './store/reducer/checkitem.reducer'
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  todo: todoReducer
});

const store = createStore(rootReducer);

// to create store ->need root reducer -> combine all reducer -> all reducers


// import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
