
import './App.css';
import NavBar from './components/navbar/navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <CartWidget />
        <ItemListContainer greeting={'¡Bienvenidos a Vico Diseño!'} />
      </header>
    </div>
  );
}

export default App;
