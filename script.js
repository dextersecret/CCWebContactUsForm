let mode = [];
const primaryElementId = '#startPage';
const countryPicklstId = 'countries';
const activeEvtValues = [
	'material',
	'shelters',
	'info',
	'artist',
	'other',
	'other1',
	'partner',
	'United States',
	'United Kingdom'
];
const secnodaryElmntIds = {
	countryPageId: '#countryPage',
	otherPage1Id: '#otherPage1',
	otherPage2Id: '#otherPage2',
	ccRepPageId: '#ccRepPage',
	shltrsUsaPageId: '#shltrsUsaPage',
	shltrsOtherPageId: '#shltrsOtherPage',
	artistPageId: '#artistPage'
};
const pathways = [
	{
		initiatorId: '#btnMat',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'material' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#btnShltr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'shelters' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#btnArt',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'artist' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.otherPage1Id,
		routeModes: [ 'other' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr1',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.otherPage2Id,
		routeModes: [ 'other', 'other1' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#btnPrtnr',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'other', 'partner' ],
		restrictRoutes: [],
		eventType: 'click'
	},
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		routeModes: [ 'material', 'partner', 'artist', 'other' ],
		restrictRoutes: [ 'United States', 'United Kingdom', 'design' ],
		eventType: 'input'
	},
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.shltrsOtherPageId,
		routeModes: [ 'shelters', 'United Kingdom' ],
		restrictRoutes: [ 'United States' ],
		eventType: 'input'
	},
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: '#' + countryPicklstId,
		showElement: '#unitedkingdom',
		routeModes: [ 'United Kingdom', 'material', 'partner', 'artist', 'other' ],
		restrictRoutes: [],
		eventType: 'input'
	},
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: '#' + countryPicklstId,
		showElement: '#unitedstates',
		routeModes: [ 'United States', 'material', 'partner', 'artist', 'other', 'shelters' ],
		restrictRoutes: [],
		eventType: 'input'
	},

	{
		initiatorId: '#unitedkingdom',
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.artistPageId,
		routeModes: [ 'artist', 'United Kingdom' ],
		restrictRoutes: [],
		eventType: 'input'
	},
	{
		initiatorId: '#unitedkingdom',
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		routeModes: [],
		restrictRoutes: [ 'artist' ],
		eventType: 'input'
	},

	{
		initiatorId: '#unitedstates',
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.shltrsUsaPageId,
		routeModes: [ 'shelters', 'United States' ],
		restrictRoutes: [],
		eventType: 'input'
	},
	{
		initiatorId: '#unitedstates',
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,
		routeModes: [],
		restrictRoutes: [ 'shelters' ],
		eventType: 'input'
	}
];
const reps = [
	{
		name: 'Phill Greer',
		title: 'Title',
		countries: [ 'United States' ],
		territories: [ 'TX', 'CA', 'OH', 'MN' ],
		phone: '123456789',
		email: 'phill.greer@concretecanvas.com',
		photoUrl: 'Phill'
	},
	{
		name: 'Darren Hughes',
		title: 'Title',
		countries: [ 'India', 'Russian Federation', 'Bangladesh' ],
		territories: [],
		phone: '123456789',
		email: 'darren.hughes@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luis Rego',
		title: 'Title',
		countries: [ 'Brazil', 'Chile' ],
		territories: [],
		phone: '123456789',
		email: 'luis.rego@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Samer Hasan',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'samer.hasan@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Simon Lester',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'simon.lester@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Nick Kastoumis',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'nick.kastoumis@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Michael Chong',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'michael.chong@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Mark Griffiths',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'mark.griffiths@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Flavio Cosma',
		title: 'Title',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'flavio.cosma@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Ryan McKeever',
		title: 'Title',
		countries: [ 'United Kingdom' ],
		territories: [ 'BT', 'G' ],
		phone: '123456789',
		email: 'ryan.mckeever@concretecanvas.com',
		photoUrl: 'Ryan'
	},
	{
		name: 'Ryan McKeever',
		title: 'Title',
		countries: [ 'Ireland' ],
		territories: [],
		phone: '123456789',
		email: 'ryan.mckeever@concretecanvas.com',
		photoUrl: 'Ryan'
	},
	{
		name: 'Luke Valvona',
		title: 'Title',
		countries: [ 'United Kingdom' ],
		territories: [ 'PE', 'OX' ],
		phone: '123456789',
		email: 'luke.valvona@concretecanvas.com',
		photoUrl: 'Luke'
	},
	{
		name: 'Gavin Adams',
		title: 'Title',
		countries: [ 'United Kingdom' ],
		territories: [ 'B', 'LE' ],
		phone: '123456789',
		email: 'gavin.adams@concretecanvas.com',
		photoUrl: 'Gavin'
	},
	{
		name: 'Laurie Cummings',
		title: 'Title',
		countries: [ 'United Kingdom' ],
		territories: [ 'CF', 'SA' ],
		phone: '123456789',
		email: 'laurie.cummings@concretecanvas.com',
		photoUrl: 'Laurie'
	}
];
const cntrsWthTrrtrs = [];
const picklistIds = [];
let activeRep = {
	name: '',
	title: '',
	phone: '+44 (0) 345 680 1908',
	email: 'info@concretecanvas.com',
	photoUrl: 'blank'
};

initiate(pathways, reps);

function reset(els, picklistIds) {
	showEl(document.querySelector(primaryElementId));
	for (let el in els) {
		hideEl(document.querySelector(els[el]));
	}

	picklistIds.forEach((lst) => {
		let myPcklst = document.querySelector('#' + lst.id);
		myPcklst.selectedIndex = 0;
		myPcklst.style.display = lst.defaultdisplay;
	});
	mode = [];
}
function setRepCardValues(rep) {
	document.querySelector('#repname').innerText = rep.name;
	document.querySelector('#reptitle').innerText = rep.title;
	document.querySelector('#repphone').innerText = rep.phone;
	document.querySelector('#repemail').innerText = rep.email;
	document.querySelector('#repimage').setAttribute('src', 'images/' + (rep.photoUrl || 'blank') + '.jpg');
}

function hideEl(el) {
	el.style.display = 'none';
}
function showEl(el) {
	el.style.display = 'block';
}

function initiate(paths, reps) {
	makeCntrsWthTrrtrs(reps, cntrsWthTrrtrs);

	picklistMaker(reps, countryPicklstId, 'block', 'SELECT COUNTRY');
	for (cntr of cntrsWthTrrtrs) {
		let objId = Object.keys(cntr)[0];
		picklistMaker(cntrsWthTrrtrs, objId, 'none', 'POST CODE / STATE');
	}
	makePathListeners(paths);
	document.querySelector('#btnRestart').addEventListener('click', function() {
		reset(secnodaryElmntIds, picklistIds);
	});
	reset(secnodaryElmntIds, picklistIds);
}

function makePathListeners(paths) {
	for (let path of paths) {
		document.querySelector(path.initiatorId).addEventListener(path.eventType, (e) => {
			let slctdOptn = e.target.value;
			if (!mode.includes(slctdOptn) && activeEvtValues.includes(slctdOptn)) {
				mode.push(slctdOptn);
			}
			if (
				picklistIds.some((el) => {
					return el.id == e.target.id;
				})
			) {
				activeRep =
					reps.filter((rep) => {
						return rep.territories.includes(slctdOptn);
					})[0] ||
					reps.filter((rep) => {
						return rep.countries.includes(slctdOptn);
					})[0];
				setRepCardValues(activeRep);
			}
			if (
				path.restrictRoutes.length > 0 &&
				path.routeModes.length == 0 &&
				!mode.some((md) => {
					return path.restrictRoutes.includes(md);
				})
			) {
				console.log('condition 1');
				hideEl(document.querySelector(path.hideElement));
				showEl(document.querySelector(path.showElement));
			} else if (
				path.restrictRoutes.length == 0 &&
				path.routeModes.length > 0 &&
				mode.every((md) => {
					return path.routeModes.includes(md);
				})
			) {
				console.log('condition 2');
				hideEl(document.querySelector(path.hideElement));
				showEl(document.querySelector(path.showElement));
			} else if (
				path.restrictRoutes.length > 0 &&
				!mode.some((md) => {
					return path.restrictRoutes.includes(md);
				}) &&
				(path.routeModes.length > 0 &&
					mode.every((md) => {
						return path.routeModes.includes(md);
					}))
			) {
				console.log('condition 3');
				hideEl(document.querySelector(path.hideElement));
				showEl(document.querySelector(path.showElement));
			}
		});
	}
}

function picklistMaker(objs, arrayKey, display, defaultText) {
	picklistIds.push({ id: arrayKey, defaultdisplay: display });
	const countrypg = document.querySelector(secnodaryElmntIds.countryPageId);
	const select = document.createElement('select');
	select.setAttribute('id', arrayKey);
	select.setAttribute('class', 'form-control form-control-lg mypicklist');

	countrypg.append(select);
	const newPicklist = document.querySelector('#' + arrayKey);
	let blankOption = document.createElement('option');
	blankOption.setAttribute('value', '');
	blankOption.innerText = defaultText;
	newPicklist.append(blankOption);
	let chckDuplicatSet = new Set();
	var listToSort = [];

	objs.forEach((obj) => {
		if (obj[arrayKey]) {
			obj[arrayKey].forEach((el) => {
				if (!chckDuplicatSet.has(el)) {
					let myOption = document.createElement('option');
					myOption.setAttribute('value', el);
					myOption.innerText = el;
					listToSort.push(myOption);
				}
				chckDuplicatSet.add(el);
			});
			listToSort.sort((a, b) => (a.innerText > b.innerText ? 1 : -1));
			for (optn of listToSort) {
				newPicklist.append(optn);
			}
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
				tempObj[thiscountry] = [ ...rep.territories ];
			}
		}
	});
	for (key of Object.keys(tempObj)) {
		cntrsWthTrrtrs.push({ [key]: tempObj[key] });
	}
}

function makeNewPath(initiatorId, hideElement, showElement, routeModes, eventType, country, restrictRoutes) {
	let newPath = {
		initiatorId,
		hideElement,
		showElement,
		routeModes,
		eventType,
		country,
		restrictRoutes
	};
	pathways.push(newPath);
}
