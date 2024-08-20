// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthProvider";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import ContactUs from "./views/ContactUs";
import Register from "./views/Register";
import Login from "./views/Login";



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<PrivateRoute element={Login} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
