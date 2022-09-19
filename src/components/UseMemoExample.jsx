import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);

  //   const sqrt = getSqrt(number);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const increase = () => {
    setInc((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>
      <button className='btn btn-primary' onClick={increase}>
        Rerender
      </button>
      <h3>renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i < 10000; i++) return Math.sqrt(n);
}

export default UseMemoExample;
