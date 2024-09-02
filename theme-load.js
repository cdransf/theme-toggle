(() => {
  const currentTheme = sessionStorage?.getItem('theme')
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const root = document.documentElement
  const themeToSet = currentTheme || (prefersDarkScheme ? 'dark' : 'light')
  if (!currentTheme) sessionStorage?.setItem('theme', themeToSet)
  root.setAttribute('data-theme', themeToSet)
})()