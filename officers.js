var officers = {
	pos: {	'president':	'President',
		'vice-pres':	'Vice President',
		'treasurer':	'Treasurer',
		'asst-treas':	'Associate Treasurer',
		'college-team':	'Intercollegiate Team Captain',
		'secretary':	'Recording Secretary',
		'memb-sec':	'Member Secretary',
		'boutique':	'Boutique/Kleenex Chair',
		'edu-chair':	'Education Chair',
		'comp-comm':	'Competition Committee',
		'special-events':'Special Events Chair',
		'toi':		'Theater On Ice Captain',
		'test-chair':	'Test Chair',
		'test-comm':	'Test Committee',
		'webmaster':	'Webmaster',
		'publicity':	'Publicity',
		'librarian':	'Librarian',
		'rentals': 	'Skate Rentals',
		'workshop':	'Workshop Coordinator',
		'at-large':	'Officers-At-Large'
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
