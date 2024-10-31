(() => {
  const storageType =
    document.querySelector("theme-toggle")?.getAttribute("storage") === "local"
      ? localStorage
      : sessionStorage;

  const currentTheme = storageType.getItem("theme") || "auto";
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  const lightIcon = document.querySelector(".light");
  const darkIcon = document.querySelector(".dark");
  const autoIcon = document.querySelector(".auto");

  if (currentTheme === "auto") {
    metaColorScheme.setAttribute("content", "light dark");
    document.documentElement.style.colorScheme = "";
  } else {
    metaColorScheme.setAttribute("content", currentTheme);
    document.documentElement.style.colorScheme = currentTheme;
  }

  lightIcon.style.display = "none";
  darkIcon.style.display = "none";
  autoIcon.style.display = "none";

  if (currentTheme === "light") {
    lightIcon.style.display = "inline";
  } else if (currentTheme === "dark") {
    darkIcon.style.display = "inline";
  } else {
    autoIcon.style.display = "inline";
  }
})();
