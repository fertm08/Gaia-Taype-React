import './App.scss'
import NavBar from './Components/NavBar'
import CartWidget from './Components/CartWidget';
import ItemListContainer from './Containers/ItemListContainer';
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Hola, Bienvenido/a a Gaia'}/>
    <CartWidget/>
    </>
  );
}

export default App;
