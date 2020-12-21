var e = document.getElementsByClassName("email");
for (var i = 0; i < e.length; i++) {
	e[i].addEventListener("focus", function(event){
		if (this.value == "Your email address ...") {
			this.value = "";
		}
	});
	e[i].addEventListener("blur", function(event){
		if (this.value == "") {
			this.value = "Your email address ...";
		}
	});
}


function validateForm(Id) {
	resp = document.forms[Id];
	dm = resp.getElementsByClassName("error");
	var x = resp["Email"].value;
	exp1 = /[@]/g;
	exp2 = /[.]/g;
	exp3 = /".."/g;
	exp4 = /"..."/g;
	exp5 = /"...."/g;
	case1 = (x.match(exp1) == null || x.match(exp2) == null || x.match(exp1).length >= 2 || x.match(exp2).length >= 4);
	case2 = (x.match(exp3) != null || x.match(exp4) != null || x.match(exp5) != null || x.startsWith("&#46;") || x.endsWith("&#46;"));
	if (x == "Your email address ...") {	
		for (var i = 0; i < dm.length; i++) {
			dm[i].innerHTML = "Name must be filled out";
		}
        resp["Email"].style.borderColor = "red";
		return false;
	} else {
		if(case1 || case2){
			for (var i = 0; i < dm.length; i++) {
				dm[i].innerHTML = "Please check your email";
			}
            resp["Email"].style.borderColor = "red";
			return false;
		}else{
			return true;
		}
	}
}
