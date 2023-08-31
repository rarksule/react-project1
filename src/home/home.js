import './style.css';
import logo from '../images/library.jpg';
function Home()
{
    return(  <div>
      <header className="header">
      
    <div id="logo">
        <img src={logo} width="250px" height="150px"/>
    </div>
    <nav className="nav-items">
      <a href="#home">Home</a>
      <a href="#About">About</a>
      <a href="#gallery">Gallery</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
        <div className="intro" id="home">
          <h1>DDU's Public Library  </h1>
          <p>This is a library  built by USAID for all wise and book lovers</p>
          <div className="welcome">
          <p>Welcome to  Public Library Page Public Library is dedicated to the assembly, preservation, and <br/>
            organization of resources from all types of media in a learning<br/>
             and recreational center serving all residents and visitors. It offers each patron an opportunity to seek knowledge, pleasure, personal <br/>
             betterment, and quiet reflection in surroundings dedicated to the pursuit of enlightenment.<br/>
            We are here so you, our patrons, can explore, learn and get help with all your information needs.</p>
          </div>
        </div>
    
  </div>)   
}
export default Home;