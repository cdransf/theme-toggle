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
    this.currentTheme =
      sessionStorage.getItem("theme") || this.getPreferredTheme();
    this.setTheme();
    this.addEventListeners();
  }

  getPreferredTheme() {
    return this.prefersDarkScheme.matches ? "dark" : "light";
  }

  setTheme() {
    this.theme = this.currentTheme;
    this.metaColorScheme.setAttribute("content", this.theme);
    document.documentElement.style.colorScheme = this.theme;

    const lightIcon = this.querySelector(".light");
    const darkIcon = this.querySelector(".dark");

    if (this.theme === "dark") {
      lightIcon.style.display = "inline";
      darkIcon.style.display = "none";
    } else {
      lightIcon.style.display = "none";
      darkIcon.style.display = "inline";
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
    sessionStorage.setItem("theme", this.currentTheme);
    this.setTheme();
  }

  onPreferredColorSchemeChange(event) {
    if (!sessionStorage.getItem("theme")) {
      this.currentTheme = event.matches ? "dark" : "light";
      this.setTheme();
    }
  }

  addEventListeners() {
    if (this.button)
      this.button.addEventListener("click", () => this.toggleTheme());
    this.prefersDarkScheme.addEventListener("change", (event) =>
      this.onPreferredColorSchemeChange(event)
    );
  }
}

ThemeToggle.register();
