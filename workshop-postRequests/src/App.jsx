import Instructions from './instructions/Instructions';
import CreatePost from './components/CreatePost';
import BlogPost from './components/BlogPost';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <CreatePost />
      </div>
      <div className='block postsWrapper'>Insert all posts here</div>
    </div>
  );
}
