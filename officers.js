var officers = {
	pos: {	'president':	'President',
		'vice-pres':	'Vice President',
		'treasurer':	'Treasurer',
		/*'treasurer-emer': 'Treasurer Emeritus',*/
		'asst-treas':	'Associate Treasurer',
		'college-team':	'Intercollegiate Team Captain',
		'secretary':	'Recording Secretary',
		'memb-sec':	'Member Secretary',
		'boutique':	'Boutique/Kleenex Chair',
		'edu-chair':	'Education Chair',
		/*'exhib-comm':	'Exhibition Committee',*/
		'comp-comm':	'Competition Committee',
		/*'adult-team':	'Adult Team Captain',*/
		'special-events':'Special Events Chair',
		'toi':		'Theater On Ice Captain',
		'test-chair':	'Test Chair',
		'test-comm':	'Test Committee',
		'webmaster':	'Webmaster',
		/*'asst-webmaster':'Assistant Webmaster',*/
		'publicity':	'Publicity',
		'librarian':	'Librarian',
		'rentals': 	'Skate Rentals',
		'workshop':	'Workshop Coordinator',
		'at-large':	'Officers-At-Large'
	},
	name:{	'president':	'Alexander Bourque',
		'vice-pres':	'Tetsuya Kaji',
		'treasurer':	'Jenny Wang',
		/*'treasurer-emer': 'Sarah Yu',*/
		'asst-treas':	'Laura Malhotra',
		'college-team':	'Ashley Chapin',
		'secretary':	'Lasya Thilagar',
		'memb-sec':	'Shawn Pan',
		'boutique':	'Noa Ressing, Maureen',
		'edu-chair':	'Bonny Kellermann, Esther Horwich',
		'exhib-chair':	'Yee Ling Gan, Genny Gould',
		'exhib-comm':	'Trish Fleming, Susan Alpert',	
		'comp-comm':	'Shawn Pan, Bonny Kellerman, Ashley Chapin, Aubrey Samost',	
		/*'adult-team':	'Diane Brancazio',*/
		'special-events':'Diane Brancazio',
		'toi':		'Victoria Lee, Aubrey Samost',
		'test-chair':	'Susan Alpert',
		'test-comm':	'Ashley Chapin, Aubrey Samost',
		'webmaster':	"Laura D'Aquila",
		/*'asst-webmaster':"Yee Ling Gan, Peitong Duan",*/
		'publicity':	'TBD',
		'librarian':	'Susan Alpert',
		'rentals':	'Noa Rensing, Priyanka Chatterjee',
		'at-large':	'Aviva Siegel, Subarna Basnet',
	
	},
	email:{
		"Laura D'Aquila":	{'user':'ldaquila'},
		'Aviva Siegel': 	{'user':'avivas'},
		'Dorian Burks':		{'user':'dorianb'},
		'Shawn Pan':		{'user':'shawnpan'},
		'Katherine Hobbs':	{'user':'khobbs'},
		'Camille Everhart':	{'user':'everhart'},
		'Gwen Gettliffe':	{'user':'gvg'},
		'Katherine Fang':	{'user':'katfang'},
		'Shante Stowell':	{'user':'sstowell'},
		'Beth Hadley':		{'user':'bhadley'},
		'Esther Horwich':	{'user':'ejh','domain':'alum.mit.edu'},
		'Noa Rensing':		{'user':'noa.rensing','domain':'verizon.net'},
		'Susan Alpert':		{'user':'ssalpert','domain':'gmail.com'},
		'Bonny Kellermann':	{'user':'bonnyk'},
		'Trish Fleming':	{'user':'trishf'},
		'Amy Mossman':		{'user':'amossman','domain':'head.cfa.harvard.edu'},
		'Curran Oi':		{'user':'curranoi'},
		'Diane Brancazio':	{'user':'dianebrancazio','domain':'comcast.net'},
		'Jessican Kesner':	{'user':'jessica.eienstein','domain':'gmail.com'},
		'Victoria Lee':		{'user':'vwlee'},
		'Linda Warner':		{'user':'lindwarner','domain':'hotmail'},
		'Justine Wang':		{'user':'justinew', 'domain':'alum.mit.edu'},
		'Claire Souchet':	{'user':'souchet.claire','domain':'gmail.com'},
	},
	write:function(pos) {
		document.write(this.get(pos));
	},
	get:function(pos) {
		return this.name[pos];
	},
	writeContact:function(pos) {
		document.write(this.contact(pos));
	},
	contact:function(pos) {
		var info = this.email[this.name[pos]];
		var user = info['user'];
		var dom  = ('domain' in info) ? info['domain'] : 'mit.edu';
		return this.name[pos] + ' (' + email.create(user, dom) + ')';
	}
};
