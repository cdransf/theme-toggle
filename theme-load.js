(() => {
  const currentTheme = sessionStorage.getItem("theme");
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const themeToSet = currentTheme || (prefersDarkScheme ? "dark" : "light");
  if (!currentTheme) sessionStorage.setItem("theme", themeToSet);
  metaColorScheme.setAttribute("content", themeToSet);
})();
