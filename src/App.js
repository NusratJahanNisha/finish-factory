import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Issues from './Components/Issues/Issues';

function App() {
  return (
    <div class="container">
      <Navbar></Navbar>

      <div className="row" style={{ padding: "30px" }} >

        <div className="sidebar" className="col-md-4 col-sm-2" style={{ border: "1px solid rgba(0, 0, 0, 0.06)", boxShadow: "0px 4px 36px rgba(0, 0, 0, 0.08)", borderRadius: "4px", marginRight: "40px" }}>
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-7 col-sm-10" style={{ border: "1px solid rgba(0, 0, 0, 0.06)", boxShadow: "0px 4px 36px rgba(0, 0, 0, 0.08)", borderRadius: "4px" }}>
          <Issues></Issues>
        </div>

      </div>

    </div>
  );
}

export default App;
