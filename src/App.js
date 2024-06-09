import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import React from "react"

function App() {
  const [isDark, setIsDark] = React.useState(true)
  function toggleDarkMode(){
    setIsDark(prevState => !prevState)
  }
  return (
    <div className="container">
    <Navbar darkMode={isDark} handleClick={toggleDarkMode}/>
    <Main darkMode={isDark}/>
</div>
  );
}

export default App;
