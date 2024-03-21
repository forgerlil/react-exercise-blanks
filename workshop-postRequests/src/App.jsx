import Instructions from './instructions/Instructions';
import NewPost from './components/NewPost';
import BlogPost from './components/BlogPost';

export default function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  return (
    <div className='App'>
      <Instructions />
      <div className='block'>
        <NewPost />
      </div>
      <div className='block postsWrapper'>Insert all posts here</div>
    </div>
  );
}
