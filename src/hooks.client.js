import { AppData, buildAppData, makeCleanAppData, saveAppData } from '$lib/stores/AppData.js';

setupAppData();

function setupAppData() {
	let appdata;
	if(window.localStorage.getItem('AppData') !== null) {
		// Load AppData from localstorage if it exists
		appdata = JSON.parse(window.localStorage.getItem('AppData'));
		appdata = buildAppData(appdata); // add/remove properties
	} else {
		appdata = makeCleanAppData();
	}
	AppData.set(appdata);
	saveAppData();
}
