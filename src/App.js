import logo from './logo.svg';
import Myrouter from './route/Myrouter';
import Header from './components/header/header';
import './App.css';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Myrouter/>
        <Footer/>
    </div>
  );
}

export default App;
