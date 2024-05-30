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
    }

    this.theme = this.currentTheme

    if (this.theme === 'dark') {
      this.root.classList.add('theme__dark')
      this.root.classList.remove('theme__light')
    } else {
      this.root.classList.add('theme__light')
      this.root.classList.remove('theme__dark')
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
    sessionStorage.setItem('theme', this.currentTheme)
    this.setTheme()
  }
}

ThemeToggle.register()