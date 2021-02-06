import { AddNewCar } from './components'
import CarsItem from './components/CarsItem'

function App() {
  return (
    <div className="App">
      <p className="h1 text-center">Popular Cars</p>
      <hr/>
      < CarsItem />
      
      < AddNewCar />
      </div>
  );
}

export default App;
