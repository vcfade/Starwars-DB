import React from 'react';
import logo from './logo.svg';
import './App.css';

//port StoreProvider from "./js/storeContext/storeContext.js"
import {StateProvider} from "./js/storeContext/storeContext.js"
import NavBar from "./js/components/navbar.jsx" //starwars-db/src/js/components/navbar.jsx

export const App = () => {
  const initialState = {
    testText: "X",
    favoritos: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeText':
        return {
          ...state,
          testText: action.newText
        };
        
      default:
        return state;
    }
  };
   



  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <NavBar />
    </StateProvider>
  );

}


/*
function App() {
  return (
      <StoreProvider>
        <NavBar />
      </StoreProvider>
  );
}

export default App;
*/