'use client'

import { FiMinus, FiPlus } from 'react-icons/fi'

interface CounterProps {
	quantity: number;
	onDecrement: (e: any) => void;
	onIncrement: (e: any) => void;
	disableIncrement?: boolean;
	disableDecrement?: boolean;
	variant?: "default" | "dark";
	className?: string;
};


const Counter: React.FC<CounterProps> = ({
	quantity,
	onDecrement,
	onIncrement,
	disableIncrement = false,
	disableDecrement = false,
	variant = "default",
}) => {
	const size = variant !== "dark" ? "12px" : "10px";
	return (
		<div
			className={"counter"}
		>
			<button
				onClick={onDecrement}
				className={"counter__btn flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none"}
				disabled={disableDecrement}
			>
				<FiMinus width={20} />
			</button>

			<span
				className={"counter__quantity"}
			>
				{quantity}
			</span>

			<button
				onClick={onIncrement}
				className={"counter__btn flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none"}
				disabled={disableIncrement}
			>
				<FiPlus width={size} height={size} />
			</button>
		</div>
	);
};
export default Counter;
