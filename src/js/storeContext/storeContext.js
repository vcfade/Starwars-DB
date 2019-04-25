import React, {createContext, useContext, useReducer} from 'react';

const StoreContext = React.createContext();

/*
export default class StoreProvider extends React.Component {
	state = {
		favoritos: [],
		testText:""
		
	}
	render() {
		return(
			<StoreContext.Provider value={{state: this.state}}>
				{this.props.children}
			</StoreContext.Provider>
		);
	}
}
*/

export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) =>(  //
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext)      