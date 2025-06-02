
import './App.css';
import Nav from './nav';
import Heading from './heading';
import Sort from './sort';

function App(part) {
  return (
    <div className='flex '>
    <div className='bg-black px-15 grow-1'>
      <Nav />
      <Heading />
      <Sort/>
    </div>
    <div id='sideBar' className='shrink-0'></div>
      </div>

  );
}

export default App;
