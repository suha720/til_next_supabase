'use client';
import { useDecrement, useIncrement } from '@/stores/counter';
import { Button } from '../ui/button';

const Controller = () => {
  // Selector 함수
  const increment = useIncrement();
  const decrement = useDecrement();
  return (
    <div>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default Controller;
