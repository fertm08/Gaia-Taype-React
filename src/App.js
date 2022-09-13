import './App.scss'
import NavBar from './Components/NavBar'
// import ItemListContainer from './Containers/ItemListContainer';
// //import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import ItemDetailContainer from './Containers/ItemDetailContainer';
function App() {
  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
