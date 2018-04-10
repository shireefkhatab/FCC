var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly

    var fullName = firstAndLast.split(' ');

    this.getFullName = function() {
      return fullName.join(' ');
    };
    this.getFirstName = function(){
        return fullName[0];
    };
    this.getLastName = function(){
        return fullName[1];
    };
    this.setFirstName = function(first){
         fullName[0] = first;
         return fullName[0]
    };
    this.setLastName = function(last){
        fullName[1] = last;
        return fullName[1];
    };
    this.setFullName = function(firstAndLast){
        fullName = firstAndLast.split(' ');
        return fullName;
    };


    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFirstName('Sally');
console.log(bob.getFullName());


/* 

*/
