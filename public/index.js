
const register = document.querySelector('.register');
if(register) {
  const registerAllChild = Array.from(register.children);
  registerAllChild.forEach(el => {
    if(Array.from(el.classList)[0] == "register-error") {
      const dismissButton = el.querySelector('.dismiss-button');
      dismissButton.addEventListener('click', event => {
        event.target.parentElement.remove();
      });
    }
  });
}

const login = document.querySelector('.login');
if(login) {
  const loginAllChild = Array.from(login.children);
  loginAllChild.forEach(el => {
    if(Array.from(el.classList)[0] == "login-success") {
      const dismissButton = el.querySelector('.dismiss-button');
      dismissButton.addEventListener('click', event => {
        event.target.parentElement.remove();
      });
    }
  });
}