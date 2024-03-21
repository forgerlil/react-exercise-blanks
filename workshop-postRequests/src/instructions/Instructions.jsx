import { useState } from 'react';
import ExampleOutcome from './ExampleOutcome';
import Level1 from './Level1';
import Level2 from './Level2';
import Bonus from './Bonus';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Bonus />,
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < Object.keys(componentMap).length
        ? prevComponent + 1
        : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  return (
    <div className='block'>
      <div className='goal'>
        <h1>React POST requests</h1>
        <p>
          Now that we explored how to get data from an API to read and display
          in our applications, it&apos;s time our applications <b>send data</b>{' '}
          over to the API to create a new resource!
        </p>
        <b>Your goal</b>: Send data to an API to create new resources and
        display the new resource in the viewport.
        <ExampleOutcome />
      </div>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div className='levels example'>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
      <div className='linkWrapper'>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://github.com/reactjs/react-tabs#react-tabs--'
        >
          React-tabs documentation
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://react-leaflet.js.org/'
        >
          React Leaflet documentation
        </a>
        <a
          className='link'
          rel='noopener noreferrer'
          target='_blank'
          href='https://react-leaflet.js.org/docs/start-installation/#using-a-package-registry'
        >
          Installing React Leaflet
        </a>
      </div>
    </div>
  );
};

export default Instructions;
