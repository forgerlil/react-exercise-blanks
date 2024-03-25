import { Link } from 'react-router-dom';
import Instructions from './instructions/Instructions';

export default function App() {
  return (
    <div className='App'>
      <div className='Instructions'>
        <Instructions />
        <div className='block'>
          <nav>
            <Link className='link' to='/students/2'>
              Students #2
            </Link>
            <Link className='link' to='/results/john'>
              Results John
            </Link>
          </nav>
        </div>
        <div className='block'>Create your routing here! (Routes & Route)</div>
      </div>
    </div>
  );
}
