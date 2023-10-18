import logo from './logo.svg';
import './App.css';
import LoginPageDetails from "./Components/LoginPageDetails";
import BackgroundVideo from "./Assets/4K Planet Earth Spinning in Space Free HD Videos - No Copyright.mp4"
import ProfilePicture from "./Components/ProfilePicture.png";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SuccesfulLoginPage from "./Components/SuccesfulLoginPage";
import Experience from "./Components/Experience"
import Projects from "./Components/Projects";
import WhyNetflix from "./Components/WhyNetflix";
function App() {
  return (
  <div className={"App"}>
      <Routes>
          <Route path = "/profile-app-react" element = {<LoginPageDetails/>}></Route>
          <Route path = "/Profile" element = {<SuccesfulLoginPage/>}></Route>
          <Route path = "/Experience" element = {<Experience/>}></Route>
          <Route path = "/Projects" element = {<Projects/>}></Route>
          <Route path = "/WhyNetflix" element = {<WhyNetflix/>}></Route>





      </Routes>
  </div>



  )
}

export default App;
