import React from 'react';
// style
import './App.css';
// import components
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";
import Directory from "./pages/Directory";

function App() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Directory />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
