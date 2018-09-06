import React from "react";
import ReactDOM from "react-dom";

const App = () => {
	return (
		<div>
		<p>React here!</p>
		<p>This is App.js</p>
		<p>This is webpack 4 production mode</p>
		</div>
		);
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));