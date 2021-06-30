
import React, {useState, useEffect} from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Body from './Components/Body';
import Loading from './Components/Loading';
import './styles.scss';


function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1)
  }, [])

  return (
    <app>
      {loading ? 
        <div class = 'loading'>
          <Loading/>
        </div> :
        <div class="loaded">
          <Nav/>
          <Body/>
        </div>
      
      }
    </app>
  );
}

export default App;
