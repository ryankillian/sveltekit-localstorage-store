import { localStore } from './localStore';

export const user = localStore('user', 'John Doe');
export const userObject = localStore('userObject', {
	name: 'John Doe',
	email: 'john.doe@gmail.com'
});
export const userArray = localStore('userArray', [1, 2, 3]);
