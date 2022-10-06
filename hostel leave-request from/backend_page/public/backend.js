const firebaseConfig = {
    //firebase config
  };

firebase.initializeApp(firebaseConfig);

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

var reff = firebase.database().ref('leave_form');


function selectAllData(){
   reff.once('value',
   function(allRecords){
      allRecords.forEach(
         function(currentRecord){
            var studentName = currentRecord.val().studentName;
            var registrationNumber = currentRecord.val().registrationNumber;
            var studentPhone = currentRecord.val().studentPhone;
            var parentPhone = currentRecord.val().parentPhone;
            var faculty = currentRecord.val().faculty;
            var course = currentRecord.val().course;
            var year = currentRecord.val().year;
            var semester = currentRecord.val().semester;
            var fromDate = currentRecord.val().fromDate;
            var toDate = currentRecord.val().toDate;
            var roomNumber = currentRecord.val().roomNumber;
            var reason = currentRecord.val().reason;
            var place = currentRecord.val().place;
            var address = currentRecord.val().address;
            var email = currentRecord.val().email_id;
            addItemsToTable(studentName,registrationNumber,studentPhone,parentPhone,
               faculty,course,year,semester,fromDate,toDate,roomNumber,reason,place,address,email);
         }
      );
   });
}

window.onload = selectAllData;


var Sno = 0;
var studentList = [];
/*var chkbox = document.createElement('input');
chkbox.setAttribute('type', 'checkbox');
chkbox.setAttribute('id','chkbox');*/

function addItemsToTable(studentName,registrationNumber,studentPhone,parentPhone,
   faculty,course,year,semester,fromDate,toDate,roomNumber,reason,place,address,email){
   var tbody = document.getElementById('tbody1');
   var trow = document.createElement('tr');
   var td1 = document.createElement('td');
   var td2 = document.createElement('td');
   var td3 = document.createElement('td');
   var td4 = document.createElement('td');
   var td5 = document.createElement('td');
   var td6 = document.createElement('td');
   var td7 = document.createElement('td');
   var td8 = document.createElement('td');
   var td9 = document.createElement('td');
   var td10 = document.createElement('td');
   var td11 = document.createElement('td');
   var td12 = document.createElement('td');
   var td13 = document.createElement('td');
   var td14 = document.createElement('td');
   var td15 = document.createElement('td');
   var td16 = document.createElement('td');
   //var td16 = chkbox;

   studentList.push([studentName,registrationNumber,studentPhone,parentPhone,
      faculty,course,year,semester,fromDate,toDate,roomNumber,reason,place,address,email]);

   td1.innerHTML= ++Sno;
   td2.innerHTML= studentName;
   td3.innerHTML= registrationNumber;
   td4.innerHTML= studentPhone;
   td5.innerHTML= parentPhone;
   td6.innerHTML= faculty;
   td7.innerHTML= course;
   td8.innerHTML= year;
   td9.innerHTML= semester;
   td10.innerHTML= fromDate;
   td11.innerHTML= toDate;
   td12.innerHTML= roomNumber;
   td13.innerHTML= reason;
   td14.innerHTML= place;
   td15.innerHTML= address;
   td16.innerHTML= email;


   trow.appendChild(td1);
   trow.appendChild(td2);
   trow.appendChild(td3);
   trow.appendChild(td4);
   trow.appendChild(td5);
   trow.appendChild(td6);
   trow.appendChild(td7);
   trow.appendChild(td8);
   trow.appendChild(td9);
   trow.appendChild(td10);
   trow.appendChild(td11);
   trow.appendChild(td12);
   trow.appendChild(td13);
   trow.appendChild(td14);
   trow.appendChild(td15);
   trow.appendChild(td16);

   var control = document.createElement("div");
   control.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillboxes('+Sno+')">Approve</button>'
   control.innerHTML += '<button type="button" class="btn btn-primary my-2 ml-2" data-toggle="modal" data-target="#exampleModalCenter" onclick="fillboxes('+Sno+')">Reject</button>'
   
   trow.appendChild(control);
   tbody.appendChild(trow);
}


function logout(){
   window.location.href ="./index.html";
}


var Modname = document.getElementById('nameMod');
var Modreg = document.getElementById('regMod');
var Modphone = document.getElementById('phoneMod');
var Modemail = document.getElementById('emailMod');

var Modapprove_button = document.getElementById('approveButton');
var Modreject_button = document.getElementById('rejectButton');

function fillboxes(index){
      --index;
      Modname.value = studentList[index][0];
      Modreg.value = studentList[index][1];
      Modphone.value = studentList[index][2];
      Modemail.value = studentList[index][14];

      Modname.disabled=true;
      Modreg.disabled=true;
      Modphone.disabled=true;
      Modemail.disabled=true;
}


function deleteRecord(){
   firebase.database().ref('leave_form').remove().then(
      function(){
         location.reload();
         $("exampleModalCenter").modal('hide');
      }
   )
}


function approvedMail(){
   Email.send({
       Host : "smtp.elasticemail.com",
       Username : "",
       Password : "",
       To : Modemail.value,
       From : "",
       Subject : "Leave form request Approval",
       Body : approvedMailBody,
   }).then(
   alert("The request is approved.")
   );
   deleteRecord();
}

function rejectedMail(){
   Email.send({
       Host : "smtp.elasticemail.com",
       Username : "",
       Password : "",
       To : Modemail.value,
       From : "",
       Subject : "Leave form request Approval",
       Body : rejectedMailBody,
   }).then(
   alert("The request is rejected.")
   );
   deleteRecord();
}

var approvedMailBody = "<html><strong>Approved</strong></html>";

var rejectedMailBody = "<html><strong>Approved</strong></html>";
