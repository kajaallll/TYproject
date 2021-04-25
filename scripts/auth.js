  
// add admin cloud function
const adminForm = document.querySelector('.admin-actions');
adminForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const adminEmail = document.querySelector('#admin-email').value;
  const addAdminRole = functions.httpsCallable('addAdminRole');
  addAdminRole({ email: adminEmail }).then(result => {
    console.log(result);
  });
});
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(idTokenResult => {
      user.admin = idTokenResult.claims.admin;
      setupUI();
    });
    db.collection('lecturers').onSnapshot(snapshot => {
      setupUI(user);
      setupLecturers(snapshot.docs);
      
    }, err => console.log(err.message));
  } else {
    console.log('user logged out');
    setupUI();
    setupLecturers([]);
  }
})

// Add new lecturer
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('lecturers').add({
    lecturer1Name: createForm['lecturer1Name'].value,
    lecturer1Address: createForm['lecturer1Address'].value,
    lecturer1Qualification: createForm['lecturer1Qualification'].value,
    lecturer1Subjects: createForm['lecturer1Subjects'].value,
    lecturer1WorkExp: createForm['lecturer1WorkExp'].value,
    lecturer2Name: createForm['lecturer2Name'].value,
    lecturer2Address: createForm['lecturer2Address'].value,
    lecturer2Qualification: createForm['lecturer2Qualification'].value,
    lecturer2Subjects: createForm['lecturer2Subjects'].value,
    lecturer2WorkExp: createForm['lecturer2WorkExp'].value,
    lecturer3Name: createForm['lecturer3Name'].value,
    lecturer3Address: createForm['lecturer3Address'].value,
    lecturer3Qualification: createForm['lecturer3Qualification'].value,
    lecturer3Subjects: createForm['lecturer3Subjects'].value,
    lecturer3WorkExp: createForm['lecturer3WorkExp'].value,
    lecturer4Name: createForm['lecturer4Name'].value,
    lecturer4Address: createForm['lecturer4Address'].value,
    lecturer4Qualification: createForm['lecturer4Qualification'].value,
    lecturer4Subjects: createForm['lecturer4Subjects'].value,
    lecturer4WorkExp: createForm['lecturer4WorkExp'].value,
    lecturer5Name: createForm['lecturer5Name'].value,
    lecturer5Address: createForm['lecturer5Address'].value,
    lecturer5Qualification: createForm['lecturer5Qualification'].value,
    lecturer5Subjects: createForm['lecturer5Subjects'].value,
    lecturer5WorkExp: createForm['lecturer5WorkExp'].value,
    collegeCode:  createForm['collegeCode'].value,
    collegeName:  createForm['collegeName'].value,
    principalName: createForm['principalName'].value,
    principalPhone:  createForm['principalPhone'].value,
    principalEmail: createForm['principalEmail'].value,
    hodName: createForm['hodName'].value,
    hodPhone: createForm['hodPhone'].value,
    hodEmail: createForm['hodEmail'].value,
    hodQualification: createForm['hodQualification'].value,
    hodExperienceYears: createForm['hodExperienceYears'].value,
  }).then(() => {
    // close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});
  
  // signup
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
  
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-signup');
      M.Modal.getInstance(modal).close();
      signupForm.reset();
      signupForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
      signupForm.querySelector('.error').innerHTML = err.message;
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // login
  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
  
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the signup modal & reset form
      const modal = document.querySelector('#modal-login');
      M.Modal.getInstance(modal).close();
      loginForm.reset();
      
      loginForm.querySelector('.error').innerHTML = '';
    }).catch(err => {
      loginForm.querySelector('.error').innerHTML = err.message;
    });
  
  });