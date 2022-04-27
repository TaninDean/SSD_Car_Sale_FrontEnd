import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import CarCard from './components/Car_Card'

function App() {
  return (
    <div>
      <div>
      <NavBar></NavBar>
      </div>
      <div className="Card">
        <CarCard></CarCard>
      </div>

    </div>
  );
}

export default App;
