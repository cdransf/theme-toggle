(() => {
  const currentTheme = sessionStorage?.getItem('theme');
  if (!currentTheme) sessionStorage?.setItem('theme', (this.prefersDarkScheme ? 'dark' : 'light'))
  if (currentTheme === 'dark') {
    document.body.classList.add('theme__dark')
  } else if (currentTheme === 'light') {
    document.body.classList.add('theme__light')
  } else if (this.prefersDarkScheme) {
    document.body.classList.add('theme__dark')
  } else if (!this.prefersDarkScheme) {
    document.body.classList.add('theme__light')
  }
})();