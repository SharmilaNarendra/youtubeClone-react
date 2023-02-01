import './App.css';
import Nav from "./Nav"
import Panel from "./Panel"
import Body from "./Body"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import VedioPage from './watch/VedioPage';
 
const router = createBrowserRouter([
  {
   path:"/",
   element:<Body></Body>
  },
  {
   path:"/watch",
   element:<VedioPage></VedioPage>
  }
]);

function App() {
  return (
    <>
      <Nav></Nav>
      <div className='grid grid-flow-col grid-cols-12'>
      <Panel ></Panel>
      <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
