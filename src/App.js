import './App.css';

import content from './PageData.js'

import {Carousel} from 'react-3d-animated-carousel';
function App() {
  return (
    <div className="App">
      {/* <div className='text'>Hey this is a demo site for presntation of <br/> npm-carouse-package, scroll down to see</div> */}
      <Carousel isDark={true} data={content}/>
      {/* <div className='text'>Created by piyushchittora</div> */}
    </div>
  );
}

export default App;
