
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
        <div className="content-app">
        <Content 
            rating="5"
            label="SOLD OUT"
            image="katie"
            quantity="6"
            origin="USA"
            service="Life lessons with Katie Zaferes"
            pricing="$136"
            // person : /person /couple etc...
            person="/person" />
            <Content
            rating="5"
            label="ONLINE"
            image="wedding"
            quantity="36"
            origin="USA"
            service="Learn wedding photography"
            pricing="$125"
            // person : /person /couple etc...
            person="/person" />
              <Content
            rating="4.8"
            label="ON SALE"
            image="mountain"
            quantity="2"
            origin="USA"
            service="Group mountain Biking"
            pricing="$50"
            // person : /person /couple etc...
            person="/person" />
        </div>
   
    </div>
  
  );
}

export default App;
