import React, {
	useEffect,
	useState
} from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

const MyComponent = () => {
	const flagA = useSelector(state => state.flagA);
	const flagB = useSelector(state => state.flagB);

	const reverseCompleteCallback = () => {
		console.log("Flag a:", flagA, " * flag b:", flagB);
	};

	const [myTween] = useState(gsap.timeline({
		paused: true,
		onReverseComplete: reverseCompleteCallback
	}));
	let tweenTarget = null;

	useEffect(() => {
		myTween
			.to(tweenTarget, { duration: 0.4, rotation: 180 })
			.reverse();
	}, []);

	useEffect(() => {
		myTween.eventCallback("onReverseComplete", reverseCompleteCallback);
	}, [flagA, flagB])

	const toggleTween = () => {
		myTween.reversed(!myTween.reversed());
	};

	return <div className="row justify-content-center">
		<div className="col-12">
			<p className="lead">In this component we check the values of the redux store properties <code>flagA</code> and <code>flagB</code>.</p>
		</div>
		<div className="col-12 col-sm-6 col-md-4 mb-3">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Flag A</h4>
					<p className="card-text">Value: {flagA ? "true" : "false"}</p>
				</div>
			</div>
		</div>
		<div className="col-12 col-sm-6 col-md-4 mb-3">
			<div className="card">
				<div className="card-body">
					<h4 className="card-title">Flag B</h4>
					<p className="card-text">Value: {flagB ? "true" : "false"}</p>
				</div>
			</div>
		</div>
		<div className="col-12 border-top">
			<p className="lead">Use the button to toggle a GSAP instance.</p>
			<button className="btn btn-success" onClick={toggleTween}>Toggle Tween</button>
		</div>
		<div className="col-9 col-sm-6 col-md-4 alert alert-info text-center py-4 mt-3"
			ref={e => tweenTarget = e}
		>
			Tween Target Element
		</div>
	</div>;
};

export default MyComponent;
