import { Route, Routes } from "react-router-dom";
import Home from './components/home/index'
import About from './components/about/index'
import Contact from './components/contact/index'

function App() {
  return (
    <Routes>
         <Route path="/" exact element = {<Home/>}/>
         <Route path="/about" exact element = {<About/>}/>
         <Route path="/contact" exact element = {<Contact/>}/>
    </Routes>
  );
}

export default App;
