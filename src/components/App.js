import React,{useState} from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <LoginForm onLogin={handleLogin}/>
        )}
    </div>
  );
};

export default App;
