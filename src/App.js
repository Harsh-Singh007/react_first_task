import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Nev from './Component/Nev';
import Sidecon from './Component/Sidecon';
import Main from './Component/Main';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Nev/>
    <Sidecon/>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
