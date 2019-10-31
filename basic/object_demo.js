var person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 19,
	name: function() {
	    return this.firstName + ' ' + this.lastName
	},
	education: {
	    school: {
		name: 'ABC',
			located: 'XYZ'
		},
		college: {
			name: 'XYZ',
			located: 'ABC'
			}
		}
	}
 
document.write( person.education.school.located );
