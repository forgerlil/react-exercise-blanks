const Level1 = () => {
  return (
    <>
      <h4>Passing data: Basics</h4>
      <ul>
        <li>
          A component called <b>Header</b> is created for you already. Have a
          look at the code.
        </li>
        <li>
          First, you need to pass a prop named{' '}
          <span className='highlight'>&apos;title&apos;</span> containing the
          value <span className='highlight'>&apos;React is amazing!&apos;</span>{' '}
          to the <b>Header</b> component.
        </li>
        <li>
          Now in your <b>Header</b> component, extract the title props you
          passed in the previous step and display it.
        </li>
      </ul>
    </>
  );
};

export default Level1;
