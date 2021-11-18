import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const localStore = (key, initialValue) => {
	const localValue = browser && localStorage.getItem(key);
	const data = localValue ? JSON.parse(localValue) : initialValue;

	const store = writable(data, () => {
		const unsubscribe = store.subscribe((value) => {
			browser && localStorage.setItem(key, JSON.stringify(value));
		});
		return unsubscribe;
	});
	return store;
};
