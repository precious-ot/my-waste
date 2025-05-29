
import './App.css';
import Nav from './nav';
import Heading from './heading';
import Sort from './sort';

function App() {
  return (
    <div className='bg-black px-10 xs:px-15 sm:px-20 lg:px-30'>
      <Nav />
      <Heading />
      <Sort/>
    </div>
  );
}

export default App;
