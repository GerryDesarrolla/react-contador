import React from "react";
import ReactDOM from 'react-dom/client';
import "normalize/index.styl"
import "./estilos.scss";
import {CounterApp} from "./CounterApp";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={0}/>
	</React.StrictMode>
)
