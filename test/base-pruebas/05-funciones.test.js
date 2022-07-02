import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
	test('getUser debe retornar un objeto', () => {
		const usuarioTest = {
			uid: 'ABC123',
			username: 'El_Papi1502'
		};
		const usuario = getUser();
		
		expect(usuarioTest).toEqual(usuario);
	});
	
	test('getUSuarioActivo debe de retornar un objeto', () => {
		const nombre = "Gerardo";
		const usuario = getUsuarioActivo(nombre);
		
		expect(usuario).toStrictEqual({
			uid: 'ABC567',
			username: nombre
		})
	});
})
