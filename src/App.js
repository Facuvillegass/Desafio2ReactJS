import './App.css';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';


function App() {
  return (
    <div>
      <header>     
        <NavBar/>
      </header>
      <main>
        <HomePage />
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
