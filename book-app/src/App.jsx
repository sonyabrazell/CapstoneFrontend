import logo from './logo.svg';
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



  let url = `https://openlibrary.org/api/books?bibkeys=ISBN:${book_isbn}&jscmd=data&format=json`

  render() {
    const user = this.state.user;
    return ( 
      <div>
        <Router>
          <NavBar user={user}/>
            <Routes>
              <Route path = "/" element = {<Dashboard />} />
              <Route path = "/login" element = {<Login />} />
              <Route path = "/logout" element = {<Logout />} />
              <Route path = "/login/register" element = {<Register />} />
            </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
