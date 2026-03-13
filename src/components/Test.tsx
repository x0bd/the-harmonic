import { useState } from 'react';

export default function Test() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors cursor-pointer"
    >
      React works! Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
  );
}
