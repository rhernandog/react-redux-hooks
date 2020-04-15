import React from "react";
import {
	useSelector,
	useDispatch
} from "react-redux";
import {
	TOGGLE_FLAG_A,
	TOGGLE_FLAG_B
} from "../actions";

const Updater = () => {
	const dispatch = useDispatch();
	const flagA = useSelector(state => state.flagA);
	const flagB = useSelector(state => state.flagB);

	const toggleFlagAHandler = () => {
		dispatch({
			type: TOGGLE_FLAG_A,
			payload: !flagA
		});
	};
	const toggleFlagBHandler = () => {
		dispatch({
			type: TOGGLE_FLAG_B,
			payload: !flagB
		});
	};
	return <div className="row">
		<div className="col-12">
			<p className="lead">Use the buttons to update the flags values.</p>
			<button className="btn btn-info" onClick={toggleFlagAHandler}>Toggle Flag A</button>
			<button className="btn btn-info ml-3" onClick={toggleFlagBHandler}>Toggle Flag B</button>
		</div>
	</div>
};

export default Updater;
