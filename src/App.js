import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ContactList from './components/ContactList';
import ChatArea from './components/ChatArea';
import Footer from './components/Footer';
import "./Style.css"


function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <ContactList/>
      <ChatArea/>
      <Footer/>
    </div>
  )
}

export default App
