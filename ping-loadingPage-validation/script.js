var e = document.getElementById("Email"), f = document.getElementById("Submit"), g = document.getElementsByClassName("error");
e.addEventListener("focus", function(event){
	if (e.value == "Your email address ...") {
		e.value = "";
	}
});
e.addEventListener("blur", function(event){
	if (e.value == "") {
		e.value = "Your email address ...";
	}
});
function validateForm() {
	var x = e.value;
	exp1 = /[@]/g;
	exp2 = /[.]/g;
	exp3 = /".."/g;
	exp4 = /"..."/g;
	exp5 = /"...."/g;
	case1 = (x.match(exp1) == null || x.match(exp2) == null || x.match(exp1).length >= 2 || x.match(exp2).length >= 4);
	case2 = (x.match(exp3) != null || x.match(exp4) != null || x.match(exp5) != null || x.startsWith("&#46;") || x.endsWith("&#46;"));
	if (x == "Your email address ...") {		
		g[0].innerHTML = "Name must be filled out";
        g[1].innerHTML = "Name must be filled out";
        e.style.borderColor = "red";
		return false;
	} else {
		if(case1 || case2){
			g[0].innerHTML = "Please provide a valid email address";
            g[1].innerHTML = "Please provide a valid email address";
            e.style.borderColor = "red";
			return false;

		}else{
			return true;
		}
	}
}