(() => {
  const currentTheme = sessionStorage?.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.getElementsByTagName('html')[0];
  if (!currentTheme) sessionStorage?.setItem('theme', (prefersDarkScheme ? 'dark' : 'light'))
  if (currentTheme === 'dark') {
    root.classList.add('theme__dark')
  } else if (currentTheme === 'light') {
    root.classList.add('theme__light')
  } else if (prefersDarkScheme) {
    root.classList.add('theme__dark')
  } else if (!prefersDarkScheme) {
    root.classList.add('theme__light')
  }
})();