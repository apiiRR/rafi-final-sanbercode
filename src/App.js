// ini adalah componen navbar dan routing

import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App (props) {
  const [title, setTitle] = useState('Rafi Ramadhana');
  const [headerLinks, setHeaderLinks] = useState([
    {
      title: 'Home', path: '/'
    },
    {
      title: 'About', path: '/about'
    },
    {
      title: 'Contact', path: '/contact'
    }
  ]);
  const [home, setHome] = useState ({
    title: 'Hai...',
    subTitle: 'Saya Rafi Ramadhana',
    text: 'Berikut Portofolio Saya'
  });
  const [about, setAbout] = useState({
    title: 'Tentang Saya'
  });
  const [contact, setContact] = useState({
    title: 'Hubungi Saya'
  });

  return (
     <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Rafi Ramadhana</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={home.title} subTitle={home.subTitle} text={home.text} />} />
          <Route path="/about" render={() => <AboutPage title={about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={contact.title} />} />
          
          <Footer />

        </Container>
      </Router>
  )
}


export default App;
