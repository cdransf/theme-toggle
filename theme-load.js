(() => {
  const currentTheme = sessionStorage.getItem("theme") || "auto";
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  if (currentTheme === "auto") {
    metaColorScheme.setAttribute("content", "light dark");
    document.documentElement.style.colorScheme = "";
  } else {
    metaColorScheme.setAttribute("content", currentTheme);
    document.documentElement.style.colorScheme = currentTheme;
  }
})();
