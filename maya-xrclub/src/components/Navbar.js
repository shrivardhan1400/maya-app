
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <img src="https://via.placeholder.com/150" alt="Logo" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="hero">
      <img src="https://via.placeholder.com/800" alt="Hero Image" />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer text</p>
    </footer>
  );
}
