import React, {useState} from 'react';
import Counter from './counter.jsx';

const CountersList = () => {
	const initialState = [
		{id:0, value:0, name:"Ненужная вещь"},
		{id:1, value:1, name:"Ложка"},
		{id:2, value:2, name:"Вилка"},
		{id:3, value:2, name:"Тарелка"},
		{id:4, value:2, name:"Набор минималиста"},
	];

	const [counters, setCounter] = useState(initialState);

	const handleDelete = (id) => {
		const newCounters = counters.filter(counter => counter.id !== id);
		setCounter(newCounters);
	};

	const handleReset = (value) => {
		setCounter(initialState);
	};

	const handleIncrement = (id) => {
		const newInitialCounters = counters.map(counter => {
			if(counter.id === id) {
				counter.value = counter.value + 1;
				return {...counter, value: counter.value};
			}
			return counter;
		})
		setCounter(newInitialCounters);
	};

	const handleDecrement = (id) => {
		const newInitialCounters = counters.map(counter => {
			if(counter.id === id) {
				counter.value = counter.value - 1;
				return {...counter, value: counter.value};
			}
			return counter;
		})
		setCounter(newInitialCounters);
	};

	return (
		<>
			{counters.map((counter) => (
				<Counter key={counter.id} {...counter} onDelete={handleDelete} onIncrement={handleIncrement} onDecrement={handleDecrement} /> 			//children
			))}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
		</>
	);
};

export default CountersList;