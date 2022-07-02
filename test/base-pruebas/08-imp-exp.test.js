import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
	test('getHeroeById debe de retorna un heroe por ID', () => {
		const id = 1;
		const heroe = getHeroeById(id);
		
		expect(heroe).toEqual({
			id: 1,
			name: 'Batman',
			owner: 'DC'
		});
	});
	
	test('getHeroeById debe de retornar undefined si no existe', () => {
		const id = 100;
		const heroe = getHeroeById(id);
		
		expect(heroe).toBeFalsy();
	});
	
	test('getHeroesByOwner Debe retornar un arreglo con los heroes de DC', () => {
		const tipoHeroe = 'DC';
		const heroe = getHeroesByOwner(tipoHeroe);
		
		expect(heroe.length).toEqual(3);
		expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === tipoHeroe));
	});
	
	test('getHeroesByOwner Debe de retornar un arreglo con los heroes de marvel', () => {
		const tipoHeroe = 'Marvel';
		const heroe = getHeroesByOwner(tipoHeroe);
		
		expect(heroe.length).toEqual(2);
		expect(heroe).toEqual(heroes.filter((heroe) => heroe.owner === tipoHeroe));
	})
})
