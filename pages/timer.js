import { useState, useEffect } from 'react';

const Countdown = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time < 10) {
      const timer = setTimeout(() => {
        setTime(time + 1);
      }, 1000);

     
      return () => clearTimeout(timer);
    }
  }, [time]);

  return (
    <div className='flex justify-center'>
      <h1 className='text-3xl font-bold mt-[400px]'>Time: {time}</h1>
    </div>
  );
};
export default Countdown;