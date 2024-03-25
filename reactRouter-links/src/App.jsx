import { Link } from 'react-router-dom';
import Instructions from './instructions/Instructions';

export default function App() {
  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <nav>
            <Link className='link' to='/dashboard'>
              Dashboard
            </Link>
            <Link className='link' to='/settings'>
              Settings
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
