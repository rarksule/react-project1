import Home from './home/home';
import About from './home/about';
import Gallery from './home/gallery';
import Contact from './home/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Gallery/>
      <About/>
      <Contact/>
      
    </div>
  );
}

export default App;
