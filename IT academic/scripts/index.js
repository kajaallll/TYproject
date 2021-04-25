
// DOM elements
const lecturerList = document.querySelector('.lecturers');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const adminItems = document.querySelectorAll('.admin');


const setupUI = (user) => {
    if (user) {
      if (user.admin) {
        adminItems.forEach(item => item.style.display = 'block');
      }
       // account info
    const html = `
        <div style="font-family:monospace; color:#47476b; font-weight:bold">Logged in! <br> User Id:- ${user.email}</div>
        <div class="pink-text" style="font-family:monospace ;">${user.admin ? 'Admin' : ''}</div>
      `;
      accountDetails.innerHTML = html;
      // toggle user UI elements
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
       // clear account info    
    accountDetails.innerHTML = '';
      // toggle user elements
      adminItems.forEach(item => item.style.display = 'none');
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  };
//  setup lecturers data
const setupLecturers = (data) => {
    if (data.length) {
    let html = ' <input type ="text" id="searchCollegeHome" placeholder="Search College Name"  onkeyup="searchCollegeHome()">';
        data.forEach(doc => {
        const lecturer = doc.data();
        const li = `
            <li class="list" style="color:#29293d ;">
            <div class="collapsible-header lighten-4" style="color:#29293d ;  font-family:sanserif; font-weight:bold;" > ${lecturer.collegeName.toUpperCase()} </div>
            <div class="collapsible-body" style="background-color:#c2c2d6">
            <center>
            <b style="font-family:monospace;  ">COLLEGE INFORMATION</b>
            </center>
            <div class="row" style="font-family:sanserif;" >
            <div class="col-sm-6">
              <div class="card  darken-1" style="background-color: #666699">
                <div class="card-content white-text">
                  <span class="card-title">College Name:-${lecturer.collegeName.toUpperCase()}</span>
                  <p>
                  College Code: ${lecturer.collegeCode}
                  </p>
                </div>
              </div>
            </div>
            <center>
            <b style="font-family:monospace;  ">PRINCIPAL OF ${lecturer.collegeName.toUpperCase()}</b>
            </center>
            <div class="row">
            <div class="col-sm-6">
              <div class="card  darken-1" style="background-color: #666699">
                <div class="card-content white-text">
                  <span class="card-title">${lecturer.principalName.toUpperCase()}</span>
                  <p>
                  Phone No:- ${lecturer.principalPhone}</br>
                  Email Id:- ${lecturer.principalEmail}</br>
                  </p>
                </div>
              </div>
            </div>
            <center>
            <b style="font-family:monospace;  "> HEAD OF BSc IT DEPARTMENT</b>
            </center>
            <div class="row">
            <div class="col-sm-6">
              <div class="card  darken-1" style="background-color: #666699">
                <div class="card-content white-text">
                  <span class="card-title">${lecturer.hodName.toUpperCase()}</span>
                  <p>
                  Phone: ${lecturer.hodPhone}</br>
                  Email Id : ${lecturer.hodEmail}</br>
                  Educational Qualification: ${lecturer.hodQualification}</br>
                 Years Of Experience In Teaching Field: ${lecturer.hodExperienceYears} Years</br>
                  </p>
                </div>
              </div>
            </div>
            
            <center>
            <b style="font-family:monospace;  "> TEACHING STAFF OF BSC IT DEPARTMENT</b>
            </center>
            <div class="row">
              <div class="col-sm-6">
                <div class="card  darken-1" style="background-color: #666699">
                  <div class="card-content white-text">
                    <span class="card-title">${lecturer.lecturer1Name.toUpperCase()}</span>
                    <p>
                    Address: ${lecturer.lecturer1Address}</br>
                    Qualification: ${lecturer.lecturer1Qualification}</br>
                    Teaching Subjects: ${lecturer.lecturer1Subjects}</br>
                    Teaching Experience: ${lecturer.lecturer1WorkExp} Years</br>
                    </p>
                  </div>
                  
                </div>
                <div class="card darken-1" style="background-color: #666699" >
                  <div class="card-content white-text">
                    <span class="card-title">${lecturer.lecturer2Name.toUpperCase()}</span>
                    <p>
                    Address: ${lecturer.lecturer2Address}</br>
                    Qualification: ${lecturer.lecturer2Qualification}</br>
                    Teaching Subjects: ${lecturer.lecturer2Subjects}</br>
                    Teaching Experience: ${lecturer.lecturer2WorkExp} Years</br>
                    </p>
                  </div>
                </div>
                <div class="card  darken-1" style="background-color: #666699">
                  <div class="card-content white-text">
                    <span class="card-title">${lecturer.lecturer3Name.toUpperCase()}</span>
                    <p>
                    Address: ${lecturer.lecturer3Address}</br>
                    Qualification: ${lecturer.lecturer3Qualification}</br>
                    Teaching Subjects: ${lecturer.lecturer3Subjects}</br>
                    Teaching Experience: ${lecturer.lecturer3WorkExp} Years</br>
                    </p>
                  </div>
                </div>
                <div class="card  darken-1" style="background-color: #666699">
                  <div class="card-content white-text">
                    <span class="card-title">${lecturer.lecturer4Name.toUpperCase()}</span>
                    <p>
                    Address: ${lecturer.lecturer4Address}</br>
                    Qualification: ${lecturer.lecturer4Qualification}</br>
                    Teaching Subjects: ${lecturer.lecturer4Subjects}</br>
                    Teaching Experience: ${lecturer.lecturer4WorkExp} Years</br>
                    </p>
                  </div>
                </div>
                <div class="card  darken-1" style="background-color: #666699">
                  <div class="card-content white-text">
                    <span class="card-title">${lecturer.lecturer5Name.toUpperCase()}</span>
                    <p>
                    Address: ${lecturer.lecturer5Address}</br>
                    Qualification: ${lecturer.lecturer5Qualification}</br>
                    Teaching Subjects: ${lecturer.lecturer5Subjects}</br>
                    Teaching Experience: ${lecturer.lecturer5WorkExp} Years</br>
                    </p>
                  </div>
                </div>

              </div>
            </div>

           
           
            </div>
            </li></br>
        `;
        html += li;
        });
        lecturerList.innerHTML = html
    }else{
        lecturerList.innerHTML = '';
    }
  };
  
//manage data
function readData() {
  firebase
    .firestore()
    .collection("lecturers")
    .onSnapshot(function (snapshot) {
      document.getElementById("manageData").innerHTML = `<center>
      <h4 style="font-family:sanserif; font-weight:bold; color:#5c5c8a">Manage Data</h4></br>
      <input type ="text" id="searchCollegeManage" placeholder="Search College Name" onkeyup="searchCollegeManage()">
     </center>
      `;
      snapshot.forEach(function (taskValue) {
        document.getElementById("manageData").innerHTML += `
        <li class="listM">
            <div class="collapsible-header  lighten-4" style="background-color:#f0f0f5"> ${taskValue.data().collegeName} </div>
            <div class="collapsible-body ;
            ">
            <center>
            <button type="submit" class="waves-effect "  style="background-color:#8585ad; height:40px ; width:90px; font-family:sanserif; font-weight:bold; color:#fff"  onclick="deleteData('${taskValue.id
          }')"><i
            class="fas fa-trash-alt"></i>DELETE</button>
            </center>
          </div>
        </li>
        `;
      });
    });
}
//delete College Data
function deleteData(id) {
  firebase
    .firestore()
    .collection("lecturers")
    .doc(id)
    .delete();
  document.getElementById("manageData").innerHTML = "";
  readData();
}
//Search bar
//searchBar of homepage
const searchCollegeHome = () => {
  let filter = document.getElementById("searchCollegeHome").value.toUpperCase();
  let ul = document.getElementById("colleges");
  let li = ul.getElementsByClassName("list")
  for (var i = 0; i < li.length; i++) {
      let div = li[i].getElementsByTagName("div")[0];
      let textValue = div.textContent || div.innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none ";
      }
  }
};
//search bar of manage data
const searchCollegeManage = () => {
  let filter = document.getElementById("searchCollegeManage").value.toUpperCase();
  let ul = document.getElementById("manageData");
  let li = ul.getElementsByClassName("listM")
  for (var i = 0; i < li.length; i++) {
      let div = li[i].getElementsByTagName("div")[0];
      let textValue = div.textContent || div.innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none ";
      }
  }
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
    });
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });