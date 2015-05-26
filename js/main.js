
//var flowers = ["rose", "lily", "tulip", "lily", "azalea"];
//flowers.sort();
//console.log(flowers);

for (var i = 1; i <= 100; i++) { 
    if(i % 3 == 0){ // if value is divisible by the number 2 make it red
        document.write("<p>Fizz"+"</p>");
    } else if(i % 5 ==0) {
    	document.write("<p>Buzz"+"</p>");
    } else if (i %3==0 && i % 5==0 ) {
    	document.write("<p>fizz buzz"+"</p><br />");
    }

    	else {
        document.write(i + "<br />");
    }
}