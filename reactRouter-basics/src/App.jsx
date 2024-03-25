import { Link } from 'react-router-dom';
import Instructions from './instructions/Instructions';

export default function App() {
  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <nav>
            <Link className='link' to='/students'>
              Students
            </Link>
            <Link className='link' to='/results'>
              Results
            </Link>
          </nav>
        </div>
        <div className='block'>Add your routing here! (Routes & Route)</div>
      </div>
    </div>
  );
}
