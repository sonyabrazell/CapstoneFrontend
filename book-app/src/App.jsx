import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Navigation from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import './App.css';
import RegisterUser from './components/Register/Register';
import AddBook from './components/AddBook/AddBook';
import LibraryView from './components/LibraryView/LibraryView';
import BookTracker from './components/BookTracker/BookTracker';
import {Container} from 'react-bootstrap'

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
      <Container>
        <Router>
          <Navigation user={user}/>
            <Routes>
              <Route path = "/" element = {<Dashboard />} />
              <Route path = "/login/" element = {<Login />} />
              <Route path = "/register/" element = {<RegisterUser />} />
              <Route path = "/add_new_book/" element = {<AddBook />} />
              <Route path = "/library/" render={props=> <LibraryView {...props} user={user} />} />
              {/* <Route path = "/book_tracker/" render={props=> <BookTracker {...props} read_book="read_book" user={user} />} />
              <Route path = "/og_tracker/" render={props=> <OgTracker {...props} read_work="read_work" user={user} />} />
              <Route path = '/wishlist/' render = {props => <Wishlist{...props} user={user} /> } /> */}
            </Routes>
        </Router>
      </Container>
    );
  }
}

export default App;
