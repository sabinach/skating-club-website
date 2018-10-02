var fix = {
	page:function(main, secondary) {
		this.banner();
		this.topMenu();
		this.sideMenu();
		if (secondary == 0) {
			main += 20; // !!! for padding
		}
		document.getElementById("primary").style.width = '' + main + 'px';
		document.getElementById("secondary").style.width = '' + secondary + 'px';
		this.bottom();
	},
	banner:function() {
		document.getElementById("banner").innerHTML = '<a href="index.html">MIT Figure Skating Club</a>';
	},
	topMenu:function() {
		var menu = document.getElementById("topMenu");
		menu.innerHTML = '<a href="index.html">Home</a> &middot; ' +
				 '<a href="join.html">How to Join</a> &middot; ' +
				 '<a href="ice-time.html">Ice Time</a> &middot; ' +
				 '<a href="lessons.html">Lessons</a> &middot; ' +
				 '<a href="coaches.html">Coaches</a> &middot; ' +
				 '<a href="officers.html">Officers</a> &middot; ' +
				 '<a href="events.html">Events</a>  &middot; ' + 
				 '<a href="faq.html">FAQ</a>';
	},
	sideMenu:function() {
		var text = 
		'<div class="nav block">' +
		'<h1>Schedule</h1>' +
		'<ul>' +
		'<li><a href="ice-time.html">Ice Time</a></li>' +
		'<li><a href="test-info.html">Test Information</a></li>' +
		'<li><a href="lessons.html">Lessons</a></li>' +
			'<ul>' +
			'<li><a href="lessons.html#group">Group</a></li>' +
			'<!--li><a href="lessons.html#team">Team</a></li-->' +
			'<li><a href="lessons.html#private">Private</a></li>' +
			'<li><a href="lessons.html#pe">PE</a></li>' +
			'</ul>' +
		'</li>' +
		'</ul>' +
		'</div>' +

		'<div class="nav block">' +
		'<h1>Resources</h1>' +
		'<ul>' + 
		'<li><a href="join.html">How to Join</a></li>' +
		'<li><a href="mailing-lists.html">Mailing Lists</a></li>' +
		'<li><a href="officers.html">Officers</a>' + 
			'<ul>' + 
			'<li><a href="officer-duties.html">Duties</a></li>' +
			'</ul>' +
		'</li>' +
		'<li><a href="coaches.html">Coaches</a></li>' +
		'<li><a href="library.html">Library</a></li>' +
		'<li><a href="contact-us.html">Contact Us</a></li>' +
		'<li><a href="faq.html">FAQ</a></li>' +
		'<li><a href="http://www.usfsa.org/content/2013%20Intercollegiate%20Technical%20Rulebook,%20Final%20August%2028,%202013.pdf">Intercollegiate Rulebook</a></li>' +
		'</ul>' +
		'</div>' +
		
		'<div class="nav block">' +
		'<h1>Events</h1>' +
		'<ul>' +
		'<li><a href="http://www.usfsa.org/Programs.asp?id=89">USFS Intercollegiate Skating Competitions</a></li>'+
		'<li><a href="2012-competition.html">2012 Intercollegiate Competition</a></li>' +
//		'<li><a href="2010-exhibition.html">2010 Exhibition</a></li>' +

		'<li><a href="2010-competition.html">2010 Intercollegiate Competition</a></li>' +
		'</ul>' +
		'</div>';

		document.getElementById("sideMenu").innerHTML = text;
	},
	bottom:function() {
		var bot = document.getElementById("bottom");
		bot.innerHTML = 'Maintained by ' + officers.contact('webmaster') + ' &middot; Site updated December 6, 2012';

		if (document.getElementById("sideMenu").offsetHeight > document.getElementById("main").offsetHeight) {
			bot.style.position = 'relative';
			bot.style.top = '20px';
			bot.style.marginBottom = '30px';
		}
	}
};
