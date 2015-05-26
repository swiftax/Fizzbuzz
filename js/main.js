
//var flowers = ["rose", "lily", "tulip", "lily", "azalea"];
//flowers.sort();
//console.log(flowers);

for (var i = 1; i <= 100; i++) { 
    if(i % 3 == 0){ // if value is divisible by the number 2 make it red
        document.write("<p>fizz"+i+"</p><br />");
    } else if(i % 5 ==0) {
    	document.write("<p>buzz"+i+"</p><br />");
    } else if (i %3 && i%5==0) {
    	document.write("<p>fizz buzz"+i+"</p><br />");
    }

    	else {
        document.write(i + "<br />");
    }
}