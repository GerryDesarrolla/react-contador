import {fireEvent, render, screen} from "@testing-library/react";
import {CounterApp} from "../src/CounterApp";

describe('Pruebas sobre <CounterApp/>', () => {
	const numero = 0;
	
	test('Hacer match con el snapshot', () => {
		const {container} = render(
			<CounterApp value={numero}/>
		)
		
		expect(container).toMatchSnapshot();
	})
	
	test(`Muestra el valor inicial ${numero}`, () => {
		render(
			<CounterApp value={numero}/>
		);
		
		expect(screen.getByText(numero)).toBeTruthy();
	})
	
	test('Debe aumentar en 1 al dar clic en +', () => {
		render(
			<CounterApp value={numero}/>
		);
		
		fireEvent.click(screen.getByRole('button', {name: 'sumar'}));
		
		expect(screen.getByText(numero+1)).toBeTruthy()
	})
	
	test('Debe restar 1 al dar clic en -', () => {
		render(
			<CounterApp value={numero}/>
		);
		
		fireEvent.click(screen.getByRole('button', {name: 'restar'}));
		
		numero === 0
			? expect(screen.getByText(numero)).toBeTruthy()
			: expect(screen.getByText(2)).toBeTruthy()
	})
	
	test('Debe regresar a su estado inicial al presionar reset', () => {
		render(
			<CounterApp value={numero}/>
		);
		
		fireEvent.click(screen.getByRole('button', {name: 'sumar'}));
		fireEvent.click(screen.getByRole('button', {name: 'sumar'}));
		fireEvent.click(screen.getByRole('button', {name: 'sumar'}));
		fireEvent.click(screen.getByRole('button', {name: 'limpiar'}));
		
		expect(screen.getByText(numero)).toBeTruthy();
	})
})
