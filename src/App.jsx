
import './App.css';
import Nav from './nav';
import Heading from './heading';
import Sort from './sort';

function App(part) {
  return (
    <div className='flex '>
      <div id='sideBar' className='shrink-0 order-1'></div>
    <div className='bg-black px-6 sm:px-10 grow-1'>
      <Nav />
      <Heading />
      <Sort/>
    </div>
    
      </div>

  );
}

export default App;
