import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About';
import Experiens from './components/Experiens.jsx/Exoeriens';
import Services from './components/Services/Services';
import Folio from './components/folio/Folio'
import Tesstimonials from './components/Testimonals/Tesstimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     
      <Header/>

    
      <Nav/>

      <About/>
      <Experiens/>
      <Services/>
      <Folio></Folio>
      <Tesstimonials/>
      <Contact/>
      <Footer/>


    </div>
  );
}

export default App;
