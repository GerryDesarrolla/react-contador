import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr";

describe('Prueba en 07-deses-arr', () => {
	test('Se espera que retornaArreglo tenga un string y un numero', () => {
		const [letras, numeros] = retornaArreglo();

		expect(letras).toEqual(expect.any(String));
		expect(numeros).toEqual(expect.any(Number));
	})
})
