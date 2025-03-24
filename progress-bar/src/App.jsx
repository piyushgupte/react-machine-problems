import {ProgressBar} from './Progress'
import './App.css'

function App() {

  const bars = [5,20,50,70,100]


  return (
    <>
     <h3>Progress Bar</h3>
     {bars.map((bar)=><ProgressBar progress={bar}/>)}
    </>
  )
}

export default App
