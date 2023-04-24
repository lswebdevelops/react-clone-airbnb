
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Content from './components/Content';

import contentData from './Data/ContentData';


function App() {
  const contentElements = contentData.map(item =>{
    return(
      <Content 
      key={item.id}
      // item={item} or : 
      {...item}

      />
    )
  })
  return (
   
    <div className="App">
      <Navbar />
      <hr />
      <Hero />
      <hr />
        <div className="content-app">
       {contentElements}
        </div>
   
    </div>
  
  );
}

export default App;
