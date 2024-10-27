class ThemeToggle extends HTMLElement {
  static tagName = "theme-toggle";

  static register(
    tagName = this.tagName,
    registry = globalThis.customElements
  ) {
    registry.define(tagName, this);
  }

  connectedCallback() {
    if (this.shadowRoot) return;

    this.attachShadow({ mode: "open" }).appendChild(
      document.createElement("slot")
    );

    this.button = this.querySelector("button");
    this.metaColorScheme = document.querySelector('meta[name="color-scheme"]');
    this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    this.mode = this.getAttribute("mode") || "toggle";
    this.currentTheme = sessionStorage.getItem("theme") || "auto";

    this.setTheme();
    this.addEventListeners();
  }

  getPreferredTheme() {
    return this.prefersDarkScheme.matches ? "dark" : "light";
  }

  setTheme() {
    if (this.currentTheme === "auto") {
      this.metaColorScheme.setAttribute("content", "light dark");
      document.documentElement.style.colorScheme = "";
    } else {
      this.metaColorScheme.setAttribute("content", this.currentTheme);
      document.documentElement.style.colorScheme = this.currentTheme;
    }
    this.updateIcons();
  }

  updateIcons() {
    const lightIcon = this.querySelector(".light");
    const darkIcon = this.querySelector(".dark");
    const autoIcon = this.querySelector(".auto");

    if (this.currentTheme === "light") {
      lightIcon.style.display = "inline";
      darkIcon.style.display = "none";
      autoIcon.style.display = "none";
    } else if (this.currentTheme === "dark") {
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline";
      autoIcon.style.display = "none";
    } else {
      lightIcon.style.display = "none";
      darkIcon.style.display = "none";
      autoIcon.style.display = "inline";
    }
  }

  toggleCycle() {
    if (this.currentTheme === "auto") {
      this.currentTheme = "light";
    } else if (this.currentTheme === "light") {
      this.currentTheme = "dark";
    } else {
      this.currentTheme = "auto";
    }

    if (this.currentTheme !== "auto") {
      sessionStorage.setItem("theme", this.currentTheme);
    } else {
      sessionStorage.removeItem("theme");
    }

    this.setTheme();
  }

  onPreferredColorSchemeChange(event) {
    if (this.currentTheme === "auto") {
      const preferredTheme = event.matches ? "dark" : "light";
      document.documentElement.style.colorScheme = preferredTheme;
      this.metaColorScheme.setAttribute("content", "light dark");
    }
  }

  addEventListeners() {
    if (this.button) {
      this.button.addEventListener("click", () => this.toggleCycle());
    }
    this.prefersDarkScheme.addEventListener("change", (event) =>
      this.onPreferredColorSchemeChange(event)
    );
  }
}

ThemeToggle.register();
