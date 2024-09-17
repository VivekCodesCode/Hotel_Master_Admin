import logo from './logo.svg';
import './App.css';
import Tables from './Components/Tables';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AddWaiter from './Components/AddWaiter';
import WaiterProfile from './Components/WaiterProfile';
import AddFood from './Components/AddFood';
function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/AddWaiter' element={<AddWaiter/>}/>
    <Route path='/' element={<Tables/>}/>
    <Route path='/WaiterProfile' element={<WaiterProfile/>}/>
    <Route path='/addFood' element={<AddFood/>}/>
  </Routes>
  </Router>
   </>
  );
}

export default App;
