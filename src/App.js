import './App.css';
import Nav from "./Nav"
import Panel from "./Panel"
import Body from "./Body"
import store from './store';
import { Provider } from 'react-redux';
function App() {
  
  return (
    <>
     <Provider store={store}>
      <Nav></Nav>
      <div className='grid grid-flow-col grid-cols-12'>
      <Panel ></Panel>
      <Body></Body>
      </div>
      </Provider>
    </>
  );
}

export default App;
