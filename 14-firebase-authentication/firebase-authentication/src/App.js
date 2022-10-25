import React from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./auhentication/firebase";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";

function App() {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
