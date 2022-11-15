import './App.css';
import MenuContainer from './components/MenuContainer';
import {useEffect} from 'react';
import $ from "jquery";

function App() {

  useEffect(() => {
    window.addEventListener('mousemove', handleMouse);
  }, []);

  // get mouse position and set circle position
  const handleMouse = (e) => {
    const mousePosX = Math.round((e.clientX / window.innerWidth) * 1000) / 1000;
    const mousePosY = Math.round((e.clientY / window.innerHeight) * 1000) / 1000;

    const circleLocationX = mousePosX * 100;
    const circleLocationY = mousePosY * 100;

    $("#pointer").css("left", `${circleLocationX}%`);
    $("#pointer").css("top", `${circleLocationY}vh`);
  }

  return (
    <div className="App">
      <div id='pointer'>
        <img src='/wii_pointer.png' alt='wii_pointer'/>
      </div>
      <MenuContainer /> 
    </div>
  );
}

export default App;
