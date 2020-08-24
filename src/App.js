import React from 'react';
import './App.css';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';
import { Provider } from './context';
import data from './data'


const MyContext = React.createContext();



class App extends React.Component {
  state= {
    items: data,
  }

  //get unique 
  

  render(){
  return (
    <Provider value={this.state.items}>
          <div className="App">
            <h4>Hello from app</h4>
            <RoomsList/>
            <RoomsFilter/>
          </div>
    </Provider>
    
  );
}
}
export default App;
