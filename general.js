var email = {
	create:function(name, domain) {
		return name + '[at]' + domain;
	},
	write:function(name, domain) {
		document.write(this.create(name, domain));
	}
};