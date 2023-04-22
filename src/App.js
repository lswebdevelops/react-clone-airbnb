
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
   
    <div className="App">
      <Navbar />
      <hr />
      <Hero />
      <hr />
    <Content />
    </div>
  
  );
}

export default App;
