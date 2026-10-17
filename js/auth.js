document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  const getUsers = () => {
    try {
      return JSON.parse(localStorage.getItem('FDEXUN:TOURUsers') || '[]');
    } catch (error) {
      return [];
    }
  };

  const setUsers = (users) => localStorage.setItem('FDEXUN:TOURUsers', JSON.stringify(users));

  if (registerForm) {
    const message = document.getElementById('register-message');

    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('register-name')?.value.trim() || '';
      const email = document.getElementById('register-email')?.value.trim() || '';
      const password = document.getElementById('register-password')?.value || '';

      if (!name || !email || password.length < 6) {
        if (message) {
          message.textContent = 'Please enter a valid name, email and a password with at least 6 characters.';
          message.className = 'auth-message error';
        }
        return;
      }

      const users = getUsers();
      const exists = users.some((user) => user.email.toLowerCase() === email.toLowerCase());

      if (exists) {
        if (message) {
          message.textContent = 'An account already exists for this email.';
          message.className = 'auth-message error';
        }
        return;
      }

      users.push({ name, email, password });
      setUsers(users);
      registerForm.reset();

      if (message) {
        message.textContent = 'Account created successfully. You can now log in.';
        message.className = 'auth-message success';
      }
    });
  }

  if (loginForm) {
    const message = document.getElementById('login-message');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = document.getElementById('login-email')?.value.trim() || '';
      const password = document.getElementById('login-password')?.value || '';

      if (!email || !password) {
        if (message) {
          message.textContent = 'Please enter both email and password.';
          message.className = 'auth-message error';
        }
        return;
      }

      const users = getUsers();
      const matched = users.find((user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

      if (matched) {
        if (message) {
          message.textContent = `Welcome back, ${matched.name}!`;
          message.className = 'auth-message success';
        }
        localStorage.setItem('FDEXUN:TOURCurrentUser', JSON.stringify({ name: matched.name, email: matched.email }));
        window.location.href = './index.html';
      } else {
        if (message) {
          message.textContent = 'No matching account was found. Please create an account or check your details.';
          message.className = 'auth-message error';
        }
      }
    });
  }
});
