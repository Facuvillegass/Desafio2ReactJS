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
        <ItemListContainer title= "ArmBot" image = "/assets/armBot.png" description = "Need a hand? Here's your solution!" />
        <ItemListContainer title= "BarBot" image = "/assets/barBot.png" description = "Need a drink? Just ask him!" />
        <ItemListContainer title= "BotEye" image = "/assets/botEye.png" description = "Can't see well? Let him do it!" />
        <ItemListContainer title= "FriendBot" image = "/assets/friendBot.png" description = "Sick of people? Call him!" />
        <ItemListContainer title= "PrintBot" image = "/assets/printBot.png" description = "You talk, he prints!" />
        <ItemListContainer title= "StoryTeller" image = "/assets/storyTeller.png" description = "Tired of reading? Let him do the work!" />
     
      </main>
    </div>
  );
}

export default App;
