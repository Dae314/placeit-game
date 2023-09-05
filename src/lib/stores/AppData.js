import { writable, get } from 'svelte/store';
import { error } from '@sveltejs/kit';

let appdata; // temporary object to build AppData

// utility function returns true iff data is an object (and nothing else)
function isObject(data) {
	// https://javascript.plainenglish.io/javascript-check-if-a-variable-is-an-object-and-nothing-else-not-an-array-a-set-etc-a3987ea08fd7
	return Object.prototype.toString.call(data) === '[object Object]';
}

// Apply a template to an object and return the result
// template should be in the format:
// [{name: 'propName', default: 'propDefaultVal', reset: false}, ...]
function objTemplate(template, obj) {
	// make sure that data is an object (and nothing else)
	if(!isObject(obj)) throw error(500, 'Object must be a plain Javascript object.');

	// make a copy of the object to start
	const newObj = JSON.parse(JSON.stringify(obj))

	// data must be an object at this point, so make sure it's consistent with the format we expect
	// add top-level props as required, and reset props that should be reset
	for(const prop of template) {
		if(prop.reset || !(prop.name in newObj)) newObj[prop.name] = prop.default;
	}
	// delete extra top-level props
	for(let prop in newObj) {
		if(!template.some(e => e.name === prop)) delete data[prop];
	}

	// everything should be good now, return the clean object
	return newObj;
}

// function to build or add in new app data top level structures
function buildAppData(data) {
	// reset option causes the associated prop to be reset to default every time the app loads
	const expectedAppDataProps = [
		{name: 'playerStats', default: {}, reset: false},
		{name: 'appSettings', default: {}, reset: false},
	];
	const expectedPlayerStatsProps = [
		{name: 'totalGames', default: 0, reset: false},
		{name: 'wonGames', default: 0, reset: false},
		{name: 'highestScore', default: 0, reset: false},
		{name: 'highestPlaced', default: 0, reset: false},
		{name: 'lowestPlaced', default: 999, reset: false},
		{name: 'fastestWin', default: null, reset: false},
		{name: 'slowestWin', default: null, reset: false},
		{name: 'highestFirstBucket', default: 999, reset: false},
		{name: 'lowestLastBucket', default: 0, reset: false},
	];
	const expectedAppSettingsProps = [
		
	];

	// set the top-level properties first
	data = objTemplate(expectedAppDataProps, data);
	// set playerStats properties now that we know it's there
	data.playerStats = objTemplate(expectedPlayerStatsProps, data.playerStats);
	// set appSettings properties now that we know it's there
	data.appSettings = objTemplate(expectedAppSettingsProps, data.appSettings);

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
