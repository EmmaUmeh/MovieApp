
import './App.css';
import NavbarComponent from './Component/NavbarComponent';
import { Navbardata } from './Component/NavbarComponent';
import HerobannerComponent from './Component/HerobannerComponent';
import { HeroList } from './Component/HerobannerComponent';


function App() {
  return (
    <div className="App">
      <NavbarComponent Navholders={Navbardata}/>
      <HerobannerComponent HeroHolders={HeroList}/>
    </div>
  );
}

export default App;
