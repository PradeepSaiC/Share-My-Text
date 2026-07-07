
import './App.css'
import Home from './components/Home'


function App() {

  useEffect(()=>{
    const API_BASE = import.meta.env.VITE_API_URL || "";
    fetch(API_BASE);
  },[])
  return (

 <>
 <Home/>
 </>
    
  )
}

export default App
