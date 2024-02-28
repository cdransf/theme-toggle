(() => {
  const currentTheme = sessionStorage?.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (!currentTheme) sessionStorage?.setItem('theme', (prefersDarkScheme ? 'dark' : 'light'))
  if (currentTheme === 'dark') {
    document.body.classList.add('theme__dark')
  } else if (currentTheme === 'light') {
    document.body.classList.add('theme__light')
  } else if (prefersDarkScheme) {
    document.body.classList.add('theme__dark')
  } else if (!prefersDarkScheme) {
    document.body.classList.add('theme__light')
  }
})();
