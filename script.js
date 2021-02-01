let mode = '';
const primaryElementId = '#startPage';
const countryPicklstId = 'countries';
const territoryPicklstId = 'territories';
const secnodaryElmntIds = {
	countryPageId: '#countryPage',
	otherPage1Id: '#otherPage1',
	otherPage2Id: '#otherPage2',
	ccRepPageId: '#ccRepPage',
	shltrsUsaPageId: '#shltrsUsaPage',
	shltrsOtherPageId: '#shltrsOtherPage',
	artistPageId: '#artistPage',
	territoryPicklstId: '#' + territoryPicklstId
};
const pathways = [
	{
		initiatorId: '#btnMat',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'material',
		routeMode: '',
		eventType: 'click'
	},
	{
		initiatorId: '#btnShltr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'shelters',
		routeMode: '',
		eventType: 'click'
	},
	{
		initiatorId: '#btnArt',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'artist',
		routeMode: '',
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.otherPage1Id,
		setMode: 'other',
		routeMode: '',
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr1',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.otherPage2Id,
		setMode: '',
		routeMode: 'other',
		eventType: 'click'
	},
	{
		initiatorId: '#btnPrtnr',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.countryPageId,
		setMode: 'material',
		routeMode: 'other',
		eventType: 'click'
	},

	// country picklist shows postcode picklist if USA and UK
	//1: country -> BDM
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		setMode: '',
		routeMode: 'material',
		eventType: 'input'
	},
	//2 country-> territory picklist
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: '#' + countryPicklstId,
		showElement: territoryPicklstId,
		setMode: '',
		routeMode: 'material',
		eventType: 'input'
	},
	//1.2 territory -> BDM
	{
		initiatorId: '#' + territoryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		setMode: '',
		routeMode: 'material',
		eventType: 'input'
	},
	//3 Country -> Shelter (Other)
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.shltrsOtherPageId,
		setMode: '',
		routeMode: 'shelters',
		eventType: 'input'
	},
	//3.1 Territory -> Shelter (USA)
	{
		initiatorId: '#' + territoryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.shltrsOtherPageId,
		setMode: '',
		routeMode: 'shelters',
		eventType: 'input'
	},
	// 4 - design
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.artistPageId,
		setMode: '',
		routeMode: 'artist',
		eventType: 'input'
	}
];

const reps = [
	{
		name: 'Phill Greer',
		countries: [ 'United States' ],
		territories: [ 'TX', 'CA' ],
		title: 'Test',
		phone: '123456789',
		email: 'phill.greer@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Darren Hughes',
		countries: [ 'India', 'Russian Federation' ],
		territories: [],
		phone: '123456789',
		email: 'darren.hughes@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luis Rego',
		countries: [ 'Brazil', 'Chile' ],
		territories: [],
		phone: '123456789',
		email: 'luis.rego@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Samer Hasan',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'samer.hasan@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Simon Lester',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'simon.lester@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Nick Kastoumis',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'nick.kastoumis@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Michael Chong',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'michael.chong@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Mark Griffiths',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'mark.griffiths@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Flavio Cosma',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'flavio.cosma@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Ryan McKeever',
		countries: [ 'United Kingdom' ],
		territories: [],
		phone: '123456789',
		email: 'ryan.mckeever@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luke Valvona',
		countries: [ 'United Kingdom' ],
		territories: [ 'CB', 'OF' ],
		phone: '123456789',
		email: 'luke.valvona@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Gavin Adams',
		countries: [ 'United Kingdom' ],
		territories: [ 'BM', 'NN' ],
		phone: '123456789',
		email: 'gavin.adams@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Laurie Cummings',
		countries: [ 'United Kingdom' ],
		territories: [ 'CF', 'SA' ],
		phone: '123456789',
		email: 'laurie.cummings@concretecanvas.com',
		photoUrl: ''
	}
];
const cntrsWthTrrtrs = [];

initiate(pathways, reps);

function reset(els) {
	for (let el in els) {
		hideEl(document.querySelector(els[el]));
	}
	let ctrPcklst = document.querySelector('#' + countryPicklstId);
	showEl(document.querySelector(primaryElementId));
	showEl(ctrPcklst);
	ctrPcklst.selectedIndex = 0;
	mode = '';
}

function hideEl(el) {
	el.style.display = 'none';
}
function showEl(el) {
	el.style.display = 'block';
}

function initiate(paths, reps) {
	makeCntrsWthTrrtrs(reps, cntrsWthTrrtrs);

	picklistMaker(reps, countryPicklstId);
	picklistMaker(reps, territoryPicklstId);
	for (cntr of cntrsWthTrrtrs) {
		picklistMaker(cntrsWthTrrtrs, Object.keys(cntr));
	}

	for (let path of paths) {
		document.querySelector(path.initiatorId).addEventListener(path.eventType, (e) => {
			if (mode === path.routeMode) {
				hideEl(document.querySelector(path.hideElement));
				showEl(document.querySelector(path.showElement));
			}
			mode = path.setMode || mode;
		});
	}
	document.querySelector('#btnRestart').addEventListener('click', function() {
		reset(secnodaryElmntIds);
	});
	reset(secnodaryElmntIds);
}

//add arraykeys array as args, and try to make this formula run only once through reps array,
//creating 3 picklists: Countries, UK(territories), US(territories)
function picklistMaker(objs, arrayKey) {
	const countrypg = document.querySelector(secnodaryElmntIds.countryPageId);
	const select = document.createElement('select');
	select.setAttribute('id', arrayKey);
	select.setAttribute('class', 'mypicklist');

	countrypg.append(select);
	const newPicklist = document.querySelector('#' + arrayKey);
	let blankOption = document.createElement('option');
	blankOption.setAttribute('value', '');
	blankOption.innerText = 'PLEASE SELECT';
	newPicklist.append(blankOption);
	let chckDuplicatSet = new Set();

	objs.forEach((obj) => {
		if (obj[arrayKey]) {
			obj[arrayKey].forEach((el) => {
				if (!chckDuplicatSet.has(el)) {
					let myOption = document.createElement('option');
					myOption.setAttribute('value', el);
					myOption.innerText = el;
					newPicklist.append(myOption);
				}
				chckDuplicatSet.add(el);
			});
		}
	});
}

function idfriendly(str) {
	return str.toLowerCase().split(' ').join('');
}
function makeCntrsWthTrrtrs(reps, cntrsWthTrrtrs) {
	let tempObj = {};
	reps.forEach((rep) => {
		if (rep.territories[0]) {
			if (rep.countries.length > 1) {
				throw new Error(`rep ${rep.name} nas multiple countries and subterritories`);
			}
			let thiscountry = idfriendly(rep.countries[0]);
			if (tempObj[thiscountry]) {
				tempObj[thiscountry].push(...rep.territories);
			} else {
				tempObj[thiscountry] = rep.territories;
			}
		}
	});
	for (key of Object.keys(tempObj)) {
		cntrsWthTrrtrs.push({ [key]: tempObj[key] });
	}
}
