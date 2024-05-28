class ThemeToggle extends HTMLElement {
  static tagName = 'theme-toggle'

  static register(tagName = this.tagName, registry = globalThis.customElements) {
    registry.define(tagName, this)
  }

  connectedCallback() {
    if (this.shadowRoot) return
    this.attachShadow({ mode: 'open' }).appendChild(document.createElement('slot'))
    this.root = document.documentElement
    this.button = this.querySelector('button')
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.currentTheme = sessionStorage.getItem('theme')
    this.setTheme()
    this.button.addEventListener('click', () => this.toggleTheme())
  }

  setTheme() {
    if (!this.currentTheme) {
      this.currentTheme = this.prefersDarkScheme ? 'dark' : 'light'
      sessionStorage.setItem('theme', this.currentTheme)
    }

    this.theme = this.root.classList.contains('theme__light') ? 'light' : 'dark'

    if (!this.root.classList.contains(`theme__${this.theme}`)) this.root.classList.add(`theme__${this.theme}`)
  }

  toggleTheme() {
    this.root.classList.toggle('theme__light')
    this.root.classList.toggle('theme__dark')
    this.setTheme()
  }
}

ThemeToggle.register()