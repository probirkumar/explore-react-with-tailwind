import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold'>This is a big heading.</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}

export default App;
