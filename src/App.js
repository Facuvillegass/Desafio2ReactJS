import './App.css';
import HomePage from './HomePage/HomePage';
import NavBar from './NavBar/NavBar';
import ItemList from './ItemList/ItemList';


function App() {
  return (
    <div>
      <header>     
        <NavBar/>
      </header>
      <main>
        <HomePage />
        <ItemList title= "ArmBot" image = "/assets/armBot.png" description = "Need a hand? Here´s your solution!" />
        <ItemList title= "BarBot" image = "/assets/barBot.png" description = "Need a drink? Just ask him!" />
        <ItemList title= "BotEye" image = "/assets/botEye.png" description = "Can´t see well? Let him do it!" />
        <ItemList title= "FriendBot" image = "/assets/friendBot.png" description = "Sick of people? Call him!" />
        <ItemList title= "PrintBot" image = "/assets/printBot.png" description = "You talk, he prints!" />
        <ItemList title= "StoryTeller" image = "/assets/storyTeller.png" description = "Tired of reading? Let him do the work!" />
     
      </main>
    </div>
  );
}

export default App;
