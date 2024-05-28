(() => {
  const currentTheme = sessionStorage?.getItem('theme')
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const root = document.getElementsByTagName('html')[0]
  if (!currentTheme) sessionStorage?.setItem('theme', (prefersDarkScheme ? 'dark' : 'light'))
  root.classList.add(`theme__${currentTheme || (prefersDarkScheme ? 'dark' : 'light')}`)
})()