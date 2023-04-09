// Import React and required components
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer'

// Define the Layout component
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
