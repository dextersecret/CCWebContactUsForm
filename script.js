let mode = '';
const secnodaryElmnts = [
	'countryPage',
	'otherPage1',
	'otherPage2',
	'ccRepPage',
	'shltrsUsaPage',
	'shltrsOtherPage',
	'artistPage'
];
const pathways = [
	{
		initiatorId: 'btnMat',
		hideElement: 'startPage',
		showElement: 'countryPage',
		setMode: 'material',
		eventType: 'click'
	},
	{
		initiatorId: 'btnShltr',
		hideElement: 'startPage',
		showElement: 'countryPage',
		setMode: 'shelters',
		eventType: 'click'
	},
	{
		initiatorId: 'btnArt',
		hideElement: 'startPage',
		showElement: 'countryPage',
		setMode: 'artist',
		eventType: 'click'
	},
	{
		initiatorId: 'btnOthr',
		hideElement: 'startPage',
		showElement: 'otherPage1',
		setMode: 'other',
		eventType: 'click'
	},
	{
		initiatorId: 'btnOthr1',
		hideElement: 'otherPage1',
		showElement: 'otherPage2',
		setMode: 'other',
		eventType: 'click'
	},
	{
		initiatorId: 'btnPrtnr',
		hideElement: 'otherPage1',
		showElement: 'countryPage',
		setMode: 'partner',
		eventType: 'click'
	}
	//UK Regions: also hide and show additional field
	//UK Regions: then hide whole div
	// { initiatorId: 'btnPrtnr', hideElement: 'otherPage1', showElement: 'countryPage', setMode: 'partner' eventType: 'input / change??'}
];

initiate(pathways);

//Resetting should not apply listeners again
function reset(els) {
	for (let el of els) {
		hideEl(document.querySelector('#' + el));
	}
	showEl(document.querySelector('#startPage'));
}

function hideEl(el) {
	el.style.display = 'none';
}
function showEl(el) {
	el.style.display = 'block';
}

function initiate(paths) {
	for (let path of paths) {
		document.querySelector('#' + path.initiatorId).addEventListener(path.eventType, (e) => {
			hideEl(document.querySelector('#' + path.hideElement));
			showEl(document.querySelector('#' + path.showElement));
			mode = path.setMode;
			//if eventType: 'input / change??' use e function parameter
		});
	}
	document.querySelector('#btnRestart').addEventListener('click', function() {
		reset(secnodaryElmnts);
	});
	reset(secnodaryElmnts);
}
