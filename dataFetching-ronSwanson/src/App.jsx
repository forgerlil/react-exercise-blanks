import Instructions from './instructions/Instructions';

function App() {
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>Insert your quotes here</div>
    </div>
  );
}

export default App;
