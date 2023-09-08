import { writable } from 'svelte/store';

export const Alert = writable({level: '', message: ''});
