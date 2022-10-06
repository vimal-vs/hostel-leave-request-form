const firebaseConfig = {
    //firebase config
  };

firebase.initializeApp(firebaseConfig);

var leaveformDB = firebase.database().ref('leave_form');

document.getElementById('leave_form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var studentName = getElementVal('studentName');
    var registrationNumber = getElementVal('registrationNumber');
    var studentPhone = getElementVal('studentPhone');
    var parentPhone = getElementVal('parentPhone');
    var faculty = getElementVal('faculty');
    var course = getElementVal('course');
    var year = getElementVal('year');
    var semester = getElementVal('semester');
    var fromDate = getElementVal('fromDate');
    var toDate = getElementVal('toDate');
    var hostelName = getElementVal('hostelName');
    var roomNumber = getElementVal('roomNumber');
    var reason = getElementVal('reason');
    var place = getElementVal('place');
    var address = getElementVal('address');
    var email_id = getElementVal('email');

    saveData(studentName,registrationNumber,studentPhone,parentPhone,faculty,course,year,semester,fromDate,toDate,hostelName,roomNumber,reason,place,address,email_id);   
}


const saveData = (studentName,registrationNumber,studentPhone,parentPhone,faculty,course,year,semester,fromDate,toDate,hostelName,roomNumber,reason,place,address,email_id) =>{
    var newLeaveForm = leaveformDB.push();

    newLeaveForm.set({
        studentName:studentName,
        registrationNumber:registrationNumber, 
        studentPhone:studentPhone,
        parentPhone:parentPhone,
        faculty:faculty,
        course:course,
        year:year,
        semester:semester,
        fromDate:fromDate,
        toDate:toDate,
        hostelName:hostelName,
        roomNumber:roomNumber,
        reason:reason,
        place:place,
        address:address,
        email_id:email_id,
    })
    sendMail();
    openSuccess();
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

function openSuccess(){
    window.location.href="success.html";
}

document.querySelector('form').addEventListener('reset', function(event) {
    if (!confirm('Are you sure, do you want to reset?')) {
      event.preventDefault();
    }
});


var todayDate = new Date();
var tdate = todayDate.getDate(); 
var month = todayDate.getMonth()+1; 
if(tdate < 10){
    tdate = "0" + tdate;
}
if(month < 10){
    month = "0" + month;
}
var year = todayDate.getUTCFullYear(); 
var minDate = year + "-" + month + "-" + tdate;
document.getElementById("fromDate").setAttribute("min",minDate);
document.getElementById("toDate").setAttribute("min",minDate);

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "",
        Password : "",
        To : document.getElementById("email").value,
        From : "",
        Subject : "Leave form request confirmation",
        Body : "<html><br></br><strong>Dear Student,</strong><br></br><br></br><strong>Your request has been submitted.</strong><br></br><strong>Kindly wait for approval mail.</strong><br></br><br></br><br></br><strong>Thanks & Regards,<br></br>SRM.<br></br><br></br></strong></html>",
    }).then(
    alert('Confirmation is sent to your email!\n(Kindly check spam if not in inbox.)')
    );
}
