// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import SignUp from './components/signup'

function App() {
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
        <SignUp/>
        </div>
        <div className='col'>
        <Login/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
