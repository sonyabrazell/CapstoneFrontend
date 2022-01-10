import React from 'react';
import {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Navigation from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import RegisterUser from './components/Register/Register';
import AddBook from './components/AddBook/AddBook';
import LibraryView from './components/LibraryView/LibraryView';
import BookTracker from './components/BookTracker/BookTracker';
import OgTracker from './components/OgTracker/OgTracker';
import BookSearch from './components/BookSearch/BookSearch';
import SeriesView from './components/SeriesView/SeriesView';
import {Container} from 'react-bootstrap'
import './App.css';

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
              <Route path = "/" element = {<Dashboard user={user} book_tracker={BookTracker} og_tracker={OgTracker} library={LibraryView}/>} />,
              <Route path = "/login/" element = {<Login />} />,
              <Route path = "/register/" element = {<RegisterUser />} />,
              <Route path = "/logout/" element = {<Logout />} />,
              <Route path = "/library/add_new_book/" element = {<AddBook />} />,
              <Route path = "/library/book_search/" element = {<BookSearch />} />
              <Route path = "/library/" element = {<LibraryView user={user}/>} />,
              <Route path = "/library/book_tracker/" element={<BookTracker />} />,
              <Route path = "/library/og_tracker/" element={<OgTracker />} />,
              <Route path = "/library/series_view/" element={<SeriesView />} />,
            </Routes>
        </Router>
      </Container>
    );
  }
}

export default App;
