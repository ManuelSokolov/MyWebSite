function showContributed(){

    var activeButton = document.getElementById("projectsActive");
   
    if(activeButton.textContent.includes("Mine")){
        var inactiveButton = document.getElementById("inactive");
        inactiveButton.id = "projectsActive";
        activeButton.id="inactive";
        
        document.getElementById("mine").style.visibility = "hidden";
        document.getElementById("contributed").style.visibility ="visible";
    }

    //actually show contributed!
        
}

function showMine(){
    var activeButton = document.getElementById("projectsActive");
    
    if(activeButton.textContent.includes("Contributed")){
        var inactiveButton = document.getElementById("inactive");
        inactiveButton.id = "projectsActive";
        activeButton.id="inactive"
        document.getElementById("contributed").style.visibility ="hidden";
        document.getElementById("mine").style.visibility = "visible";
    }
    //actually show mine to do!

}
/*
function sendEmail() {
    
	Email.send({
	Host: "smtp.gmail.com",
	Username : "bigfootcomesback@gmail.com", //<sender’s email address>
	Password : "DIEmfDIE666",
	To : 'manuelsokolov@gmail.com', //<recipient’s email address>
	From : "manuelsokolov@gmail.com",//<sender’s email address>
	Subject : "ola", //<email subject>
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}
*/
