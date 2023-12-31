import React from 'react';
import useCounter from './useCounter';

const Counter2 = () => {
	const [count, Increment, Decrement] = useCounter();
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
		</div>
	);
};

export default Counter2;
