"use client";
import React from "react";

function Counter({ count }) {
	const [isCensored, setIsCensored] = React.useState(false);

	const handleClick = () => {
		setIsCensored(!isCensored);
	};

	return (
		<button className={isCensored ? "censored" : null} onClick={handleClick}>
			{count}
		</button>
	);
}

export default Counter;
