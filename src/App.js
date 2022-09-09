import './App.scss'
import NavBar from './Components/NavBar'
import ItemListContainer from './Containers/ItemListContainer';
//import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Hola, Bienvenido/a a Gaia'}/>}/>
      <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
      {/* <Route path='/detail' element={<ItemDetailContainer/>}/> */}
      {/* <Route path='*'element={<PageNotFound/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
