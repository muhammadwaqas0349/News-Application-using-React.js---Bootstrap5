import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';
import { useState } from 'react';



function App() {
const [category, setCategory] = useState("general"); 

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      
    </div>
  );
}

export default App;
