import { writable, get } from 'svelte/store';
import { error } from '@sveltejs/kit';

let appdata; // temporary object to build AppData

// utility function returns true iff data is an object (and nothing else)
function isObject(data) {
	// https://javascript.plainenglish.io/javascript-check-if-a-variable-is-an-object-and-nothing-else-not-an-array-a-set-etc-a3987ea08fd7
	return Object.prototype.toString.call(data) === '[object Object]';
}

// function to build or add in new app data top level structures
function buildAppData(data) {
	// reset option causes the associated prop to be reset to default every time the app loads
	const expectedProps = [
		{name: 'playerStats', default: {}, reset: false},
	];

	// make sure that data is an object (and nothing else)
	if(!isObject(data)) throw error(500, 'AppData must be a plain Javascript object.');

	// data must be an object at this point, so make sure it's consistent with the format we expect
	// add top-level props as required, and reset props that should be reset
	for(const prop of expectedProps) {
		if(prop.reset || !(prop.name in data)) data[prop.name] = prop.default;
	}
	// delete extra top-level props
	for(let prop in data) {
		if(!expectedProps.some(e => e.name === prop)) delete data[prop];
	}

	// everything should be good now, return the clean AppData object
	return data;
}

export async function saveAppData() {
	window.localStorage.setItem('AppData', JSON.stringify(get(AppData)));
}

if(window.localStorage.getItem('appData') !== null) {
	// Load AppData from localstorage if it exists
	let appdata = JSON.parse(window.localStorage.getItem('AppData'));
	appdata = buildAppData(appdata);
} else {
	appdata = buildAppData({});
}

export const AppData= writable(appdata);
