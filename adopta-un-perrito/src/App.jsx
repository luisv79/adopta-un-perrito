import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import Contenedor from './components/Container';
import Footer from './components/Footer';



function App() {

  return (
    <>
      <Header 
      title="Adopta un perrito"
      />
      <Contenedor />

      <Footer 
      titleFooter="Perritos en adopción @2024"
      />
      
      </>
  )
}

export default App
