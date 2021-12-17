import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Navigation from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import './App.css';
import RegisterUser from './components/Register/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: '',
    }
  }
  
  componentDidMount(){
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      })
    } catch {}
  }

  render() {
    const user = this.state.user;
    return ( 
      <div>
        <Router>
          <Navigation user={user}/>
            <Routes>
              <Route path = "/" element = {<Dashboard />} />
              <Route path = "/login/" element = {<Login />} />
              <Route path = "/register/" element = {<RegisterUser/>} />
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
