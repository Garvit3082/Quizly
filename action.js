
const loginModal = document.getElementById('login-modal');
const loginButton = document.getElementById('open-login');
const closeLogin = document.getElementById('close-login');

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
});


const signupModal = document.getElementById('signup-modal');
const signupButton = document.getElementById('open-signup');
const closeSignup = document.getElementById('close-signup');

signupButton.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});

closeSignup.addEventListener('click', () => {
  signupModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
});
