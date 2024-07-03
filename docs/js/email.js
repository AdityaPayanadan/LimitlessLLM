// https://www.youtube.com/watch?v=sGQSz22U8VM&list=PPSV
// SET UP CORRECTLY, HAD NO INTERNET ON PLANE

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "giordan.masen@gmail.com",
        Password : "password", //add using  elasticemail.com, check rest of youtube video
        To : 'jojo.eman.masen@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Website Enquiry",
        Body : "Name: " + document.getElementById("contact-your-name-2").value
            + "<br> Email: " + document.getElementById("contact-email-2").value
            + "<br> Phone Number: " + document.getElementById("contact-phone-2").value
            + "<br> Message: " + document.getElementById("contact-message-2").value
    }).then(
    message => alert("Sent to the LimitlessLLM team successfully!")
    );
}