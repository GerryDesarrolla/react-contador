import PropTypes from "prop-types";
import {useState} from "react";
import {Theme} from "./components/Theme/Theme";

export const CounterApp = ({value}) => {
	const [contador, setContador] = useState(value);

	const restar = () => contador > 0 ? setContador(contador-1) : '';
	const sumar = () => setContador(contador+1);
	const reset = () => setContador(value);

	return (
		<>
			<Theme/>
			<div className="c-contador o-container">
				<h1 className="c-contador__titulo">Contador</h1>
				
				<div className="c-contador__conteo">
					<button aria-label="restar" className="o-boton o-boton__redondo o-boton__redondo--menos" onClick={restar} disabled={contador === 0}>-</button>
					<p className="c-contador__texto">{contador}</p>
					<button aria-label="sumar" className="o-boton o-boton__redondo o-boton__redondo--mas" onClick={sumar}>+</button>
				</div>
				
				<button aria-label="limpiar" className="o-boton o-boton__rectangular" onClick={reset} disabled={contador === 0}><span>Reiniciar</span></button>
			</div>
		</>
	)
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
}
