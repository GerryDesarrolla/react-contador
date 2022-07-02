import heroes from "../../src/data/heroes";
import {getHeroeByIdAsync} from "../../src/base-pruebas/09-promesas";

describe("Prueba en 09-promesas", () => {
	test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
		const id = 1;
		
		getHeroeByIdAsync(id)
			.then(heroe => {
				expect(heroe).toEqual(heroes[id-1]);
				
				done();
			})
	})
})

describe("Prueba en 09-promesas", () => {
	test("getHeroeByIdAsync debe de retornar un error", (done) => {
		const id = 100;
		
		getHeroeByIdAsync(id)
			.catch(error => {
				expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`)
				
				done();
			});
	})
})
