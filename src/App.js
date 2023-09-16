import { Route, Routes, Navigate } from "react-router-dom";
import Home from './components/home/index'
import About from './components/about/index'
// import Career from './components/career/index'
// import Updates from './components/updates/index'
import Contact from './components/contact/index'

function App() {
  return (
    <Routes>
         <Route path="/" exact element = {<Home/>}/>
         <Route path="/about" exact element = {<About/>}/>
         {/* <Route path="/career" exact element = {<Career/>}/>
         <Route path="/updates" exact element = {<Updates/>}/> */}
         <Route path="/contact" exact element = {<Contact/>}/>
    </Routes>
  );
}

export default App;
