import React from 'react';
import useCounter from './useCounter';

const Counter1 = () => {
	const [count, Increment, Decrement] = useCounter(10);
	return (
		<div>
			<h1>Custom Hook</h1>
			<h1>{count}</h1>
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
		</div>
	);
};

export default Counter1;
