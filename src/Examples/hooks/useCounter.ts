import React from 'react';

interface Props {
  initialCount?: number;
  step?: number;
}

function useCounter({ initialCount = 0, step = 1 }: Props = { initialCount: 0, step: 1 }) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  return { count, increment, decrement };
}

export { useCounter };
