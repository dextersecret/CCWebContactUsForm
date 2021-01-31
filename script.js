let mode = '';
const primaryElementId = '#startPage';
const secnodaryElmntIds = {
	countryPageId: '#countryPage',
	otherPage1Id: '#otherPage1',
	otherPage2Id: '#otherPage2',
	ccRepPageId: '#ccRepPage',
	shltrsUsaPageId: '#shltrsUsaPage',
	shltrsOtherPageId: '#shltrsOtherPage',
	artistPageId: '#artistPage'
};
const countryPicklstId = 'countries';
const territoryPicklstId = 'territories';
const pathways = [
	{
		initiatorId: '#btnMat',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'material',
		eventType: 'click'
	},
	{
		initiatorId: '#btnShltr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'shelters',
		eventType: 'click'
	},
	{
		initiatorId: '#btnArt',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'artist',
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.otherPage1Id,
		setMode: 'other',
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr1',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.otherPage2Id,
		setMode: 'other',
		eventType: 'click'
	},
	{
		initiatorId: '#btnPrtnr',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'partner',
		eventType: 'click'
	},

	//countries regions
	// TODO country picklist shows and hides postcode
	{
		initiatorId: '#' + countryPicklstId,
		territorytorId: '#' + territoryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		setMode: '',
		eventType: 'input'
	}
];

const reps = [
	{
		name: 'Phill Greer',
		countries: [ 'United States', 'Canada' ],
		territories: [ 'TX' ],
		title: 'Test',
		phone: '123456789',
		email: 'phill.greer@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Darren Hughes',
		countries: [ 'India', 'Russian Federation' ],
		phone: '123456789',
		email: 'darren.hughes@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luis Rego',
		countries: [ 'Brazil', 'Chile' ],
		phone: '123456789',
		email: 'luis.rego@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Samer Hasan',
		countries: [],
		phone: '123456789',
		email: 'samer.hasan@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Simon Lester',
		countries: [],
		phone: '123456789',
		email: 'simon.lester@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Nick Kastoumis',
		countries: [],
		phone: '123456789',
		email: 'nick.kastoumis@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Michael Chong',
		countries: [],
		phone: '123456789',
		email: 'michael.chong@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Mark Griffiths',
		countries: [],
		phone: '123456789',
		email: 'mark.griffiths@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Flavio Cosma',
		countries: [],
		phone: '123456789',
		email: 'flavio.cosma@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Ryan McKeever',
		countries: [],
		phone: '123456789',
		email: 'ryan.mckeever@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luke Valvona',
		countries: [],
		territories: [ 'CB', 'OF' ],
		phone: '123456789',
		email: 'luke.valvona@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Gavin Adams',
		countries: [],
		territories: [ 'BM', 'NN' ],
		phone: '123456789',
		email: 'gavin.adams@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Laurie Cummings',
		countries: [],
		territories: [ 'CF', 'SA' ],
		phone: '123456789',
		email: 'laurie.cummings@concretecanvas.com',
		photoUrl: ''
	}
];

initiate(pathways, reps);

function reset(els) {
	for (let el in els) {
		hideEl(document.querySelector(els[el]));
	}
	showEl(document.querySelector(primaryElementId));
	mode = '';
}

function hideEl(el) {
	el.style.display = 'none';
}
function showEl(el) {
	el.style.display = 'block';
}

function initiate(paths, reps) {
	makeCtryPcklst(reps, countryPicklstId);
	makeCtryPcklst(reps, territoryPicklstId);

	// const myPicklist = document.querySelector('#' + countryPicklstId);
	for (let path of paths) {
		document.querySelector(path.initiatorId).addEventListener(path.eventType, (e) => {
			//running depends on mode
			console.log(e.detail);
			//also depends on country - ADD NEW ARRAY OF COUNTRY-TERRITORY linkages, then add IF statement
			//!!NOTE COUNTRY paths indicate use different INITIATORID
			//EVENT SAYS: IF this is a country from the territory paired list, use this path,

			//this does not run if country -> Region / State
			hideEl(document.querySelector(path.hideElement));
			showEl(document.querySelector(path.showElement));
			//this runs always
			mode = path.setMode || mode;
		});
	}
	document.querySelector('#btnRestart').addEventListener('click', function() {
		reset(secnodaryElmntIds);
	});
	reset(secnodaryElmntIds);
}

function makeCtryPcklst(reps, arrayKey) {
	const countrypg = document.querySelector(secnodaryElmntIds.countryPageId);
	const select = document.createElement('select');
	select.setAttribute('id', arrayKey);
	countrypg.append(select);
	const newPicklist = document.querySelector('#' + arrayKey);
	let blankOption = document.createElement('option');
	blankOption.setAttribute('value', '');
	blankOption.innerText = 'PLEASE SELECT';
	newPicklist.append(blankOption);

	reps.forEach((element) => {
		if (element[arrayKey]) {
			element[arrayKey].forEach((el) => {
				let myOption = document.createElement('option');
				myOption.setAttribute('value', element.name);
				myOption.innerText = el;
				newPicklist.append(myOption);
			});
		}
	});

	// let el =
	// rerurn el;
}
