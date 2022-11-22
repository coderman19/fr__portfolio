const darkModeBtn = document.querySelector('.dark-mode-btn');

// 1. проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  darkModeBtn.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// 2. проверка темной темы в localstorage
if (localStorage.getItem('darkMode') === 'dark') {
  darkModeBtn.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  darkModeBtn.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}

// 3. включение ночного режима
darkModeBtn.onclick = function () {
  darkModeBtn.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem("darkMode", 'light')
  };
};

// 4. меняем темы при смене системных настроек
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
  const newColorScheme = event.matches ? 'dark' : 'light';

  alert('Внимание: тема изменилась!');

  if (newColorScheme === 'dark') {
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  } else {
    darkModeBtn.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem("darkMode", 'light');
  }
});
