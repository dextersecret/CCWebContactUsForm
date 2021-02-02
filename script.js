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
// const territoryPicklstId = 'territories';
const secnodaryElmntIds = {
	countryPageId: '#countryPage',
	otherPage1Id: '#otherPage1',
	otherPage2Id: '#otherPage2',
	ccRepPageId: '#ccRepPage',
	shltrsUsaPageId: '#shltrsUsaPage',
	shltrsOtherPageId: '#shltrsOtherPage',
	artistPageId: '#artistPage'
	// territoryPicklstId: '#' + territoryPicklstId
};
const pathways = [
	{
		initiatorId: '#btnMat',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'material' ],
		eventType: 'click'
	},
	{
		initiatorId: '#btnShltr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'shelters' ],
		eventType: 'click'
	},
	{
		initiatorId: '#btnArt',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'artist' ],
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr',
		hideElement: primaryElementId,
		showElement: secnodaryElmntIds.otherPage1Id,
		routeModes: [ 'other' ],
		eventType: 'click'
	},
	{
		initiatorId: '#btnOthr1',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.otherPage2Id,
		routeModes: [ 'other', 'other1' ],
		eventType: 'click'
	},
	{
		initiatorId: '#btnPrtnr',
		hideElement: secnodaryElmntIds.otherPage1Id,
		showElement: secnodaryElmntIds.countryPageId,
		routeModes: [ 'other', 'partner' ],
		eventType: 'click'
	},

	// country picklist shows postcode picklist if USA and UK
	//1: country -> BDM
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.ccRepPageId,

		routeModes: [ 'material', 'partner', 'artist', 'other' ],
		eventType: 'input'
	},
	//2 country-> territory picklist
	// {
	// 	initiatorId: '#' + countryPicklstId,
	// 	hideElement: '#' + countryPicklstId,
	// 	showElement: territoryPicklstId,
	//
	// 	routeModes: 'material',
	// 	eventType: 'input'
	// },
	// //1.2 territory -> BDM
	// {
	// 	initiatorId: '#' + territoryPicklstId,
	// 	hideElement: secnodaryElmntIds.countryPageId,
	// 	showElement: secnodaryElmntIds.ccRepPageId,
	//
	// 	routeModes: 'material',
	// 	eventType: 'input'
	// },
	//3 Country -> Shelter (Other)
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.shltrsOtherPageId,
		routeModes: [ 'shelters' ],
		eventType: 'input'
	},
	//3.1 Territory -> Shelter (USA)
	// {
	// 	initiatorId: '#' + territoryPicklstId,
	// 	hideElement: secnodaryElmntIds.countryPageId,
	// 	showElement: secnodaryElmntIds.shltrsOtherPageId,
	//
	// 	routeModes: 'shelters',
	// 	eventType: 'input'
	// },
	// 4 - design

	//#################make UK, initiator = territoryPicklist
	{
		initiatorId: '#' + countryPicklstId,
		hideElement: secnodaryElmntIds.countryPageId,
		showElement: secnodaryElmntIds.artistPageId,
		routeModes: [ 'artist', 'United Kingdom' ],
		eventType: 'input'
	}
];
const reps = [
	{
		name: 'Phill Greer',
		title: 'Test',
		countries: [ 'United States' ],
		territories: [ 'TX', 'CA' ],
		phone: '123456789',
		email: 'phill.greer@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Darren Hughes',
		title: 'Test',
		countries: [ 'India', 'Russian Federation' ],
		territories: [],
		phone: '123456789',
		email: 'darren.hughes@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luis Rego',
		title: 'Test',
		countries: [ 'Brazil', 'Chile' ],
		territories: [],
		phone: '123456789',
		email: 'luis.rego@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Samer Hasan',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'samer.hasan@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Simon Lester',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'simon.lester@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Nick Kastoumis',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'nick.kastoumis@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Michael Chong',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'michael.chong@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Mark Griffiths',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'mark.griffiths@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Flavio Cosma',
		title: 'Test',
		countries: [],
		territories: [],
		phone: '123456789',
		email: 'flavio.cosma@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Ryan McKeever',
		title: 'Test',
		countries: [ 'United Kingdom' ],
		territories: [],
		phone: '123456789',
		email: 'ryan.mckeever@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Luke Valvona',
		title: 'Test',
		countries: [ 'United Kingdom' ],
		territories: [ 'CB', 'OF' ],
		phone: '123456789',
		email: 'luke.valvona@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Gavin Adams',
		title: 'Test',
		countries: [ 'United Kingdom' ],
		territories: [ 'BM', 'NN' ],
		phone: '123456789',
		email: 'gavin.adams@concretecanvas.com',
		photoUrl: ''
	},
	{
		name: 'Laurie Cummings',
		title: 'Test',
		countries: [ 'United Kingdom' ],
		territories: [ 'CF', 'SA' ],
		phone: '123456789',
		email: 'laurie.cummings@concretecanvas.com',
		photoUrl: ''
	}
];
const cntrsWthTrrtrs = [];
const picklistIds = [];
let activeRep = {
	name: 'Name',
	title: 'ttl',
	phone: 'phone',
	email: 'email',
	photoUrl: 'photo'
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
	// let ctrPcklst = document.querySelector('#' + countryPicklstId);
	// showEl(ctrPcklst);
	mode = [];
}
function setRepCardValues(rep) {
	document.querySelector('#repname').innerText = rep.name;
	document.querySelector('#reptitle').innerText = rep.title;
	document.querySelector('#repphone').innerText = rep.phone;
	document.querySelector('#repemail').innerText = rep.email;
	document.querySelector('#repimage').setAttribute('src', rep.photoUrl);
}

function hideEl(el) {
	el.style.display = 'none';
}
function showEl(el) {
	el.style.display = 'block';
}

function initiate(paths, reps) {
	makeCntrsWthTrrtrs(reps, cntrsWthTrrtrs);

	picklistMaker(reps, countryPicklstId, 'block'); //making countries pcklst
	// picklistMaker(reps, territoryPicklstId);
	//WIP################################################
	for (cntr of cntrsWthTrrtrs) {
		//making territories picklists
		let objId = Object.keys(cntr)[0];
		picklistMaker(cntrsWthTrrtrs, objId, 'none');
		// for (route of routesToReps) {
		// 	//1 - pre path
		// 	makeNewPath('#' + countryPicklstId, '#' + countryPicklstId, '#' + objId, '', route, 'input');
		// 	//2 - post path
		// 	makeNewPath(
		// 		'#' + objId,
		// 		secnodaryElmntIds.countryPageId,
		// 		secnodaryElmntIds.ccRepPageId,
		// 		'',
		// 		route,
		// 		'input'
		// 	);
		// }
		// sheltr pre territory;
	}
	// UK [material, partner, artist]
	// US [material, partner, design]

	//WIP################################################
	//add to paths
	makePathListeners(paths);
	document.querySelector('#btnRestart').addEventListener('click', function() {
		reset(secnodaryElmntIds, picklistIds);
	});
	reset(secnodaryElmntIds, picklistIds);
	//SET DEFAULT BDM? OR OFFICE NUM?
}

function makePathListeners(paths) {
	for (let path of paths) {
		document.querySelector(path.initiatorId).addEventListener(path.eventType, (e) => {
			let slctdOptn = e.target.value;
			console.log('e:', slctdOptn);

			if (activeEvtValues.includes(slctdOptn) && !mode.includes(slctdOptn)) {
				mode.push(slctdOptn);
			}
			// update activeRep
			//###############LATER
			// activeRep =
			// 	reps.filter((rep) => {
			// 		return rep.territories.includes(slctdOptn);
			// 	})[0] ||
			// 	reps.filter((rep) => {
			// 		return rep.countries.includes(slctdOptn);
			// 	})[0];
			// setRepCardValues(activeRep);

			if (
				mode.every((md) => {
					return path.routeModes.includes(md);
				})
			) {
				hideEl(document.querySelector(path.hideElement));
				showEl(document.querySelector(path.showElement));
			}
		});
	}
}

//add arraykeys array as args, and try to make this formula run only once through reps array,
//creating 3 picklists: Countries, UK(territories), US(territories)
function picklistMaker(objs, arrayKey, display) {
	picklistIds.push({ id: arrayKey, defaultdisplay: display });
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
				tempObj[thiscountry] = [ ...rep.territories ];
			}
		}
	});
	for (key of Object.keys(tempObj)) {
		cntrsWthTrrtrs.push({ [key]: tempObj[key] });
	}
}

function makeNewPath(initiatorId, hideElement, showElement, setMode, routeModes, eventType, country) {
	let newPath = {
		initiatorId,
		hideElement,
		showElement,
		setMode,
		routeModes,
		eventType,
		country
	};
	pathways.push(newPath);
}
