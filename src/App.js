import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Card from './Components/Carousel/Card/Card';
function App() {
  return (
    <div >
    <Navbar />
    <div >
    
     <Carousel/>
     <div style={{margin:'50px'}}>
      <Card />
     </div>
    </div>
  </div>
  );
}

export default App;
