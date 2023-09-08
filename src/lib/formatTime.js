export default 	function formatTime(timeInMS) {
	if(!Number.isInteger(Math.floor(timeInMS))) return '0:00';
	let minutes = Math.floor(timeInMS / 60000);
	let seconds = ((timeInMS % 60000) / 1000).toFixed(0);
	return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
