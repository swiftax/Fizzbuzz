


for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 ==0) {
		document.write("<p>Fizz Buzz"+"</p>");
	} else if (i % 3 == 0) {
		document.write("<p>Fizz"+"</p>");
	} else if (i % 5 == 0) {
		document.write("<p>Buzz"+"</p>");
	}

	else {
        document.write(i + "<br />");
    }
}

