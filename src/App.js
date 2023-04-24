
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Content from './components/Content';

import contentData from './Data/ContentData';


function App() {
  const contentElements = contentData.map(content =>{
    return(
      <Content 
      rating={content.stats.rating}
      review_count={content.stats.review_count}
      label={content.label}
      image={content.image}
      location={content.location}
      service={content.service}
      pricing={content.pricing}
      person={content.person}
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
