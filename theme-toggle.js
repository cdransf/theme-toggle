const themeToggleTemplate = document.createElement('template')

themeToggleTemplate.innerHTML = `
  <button class="theme__toggle">
    <span class="light"></span>
    <span class="dark"></span>
  </button>
`

themeToggleTemplate.id = "theme-toggle-template"

if (!document.getElementById(themeToggleTemplate.id)) document.body.appendChild(themeToggleTemplate)

class ThemeToggle extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) customElements.define(tagName || "theme-toggle", ThemeToggle)
  }

  connectedCallback() {
    this.append(this.template)
    this.btn = this.querySelector('.theme__toggle')
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.currentTheme = sessionStorage?.getItem('theme')
    this.theme
    this.setTheme = () => {
      if (!this.currentTheme) sessionStorage?.setItem('theme', (this.prefersDarkScheme ? 'dark' : 'light'))

      if (this.prefersDarkScheme) {
        this.theme = document.body.classList.contains('theme__light') ? 'light' : 'dark'
      } else {
        this.theme = document.body.classList.contains('theme__dark') ? 'dark' : 'light'
      }
      sessionStorage?.setItem('theme', this.theme)
    }

    this.setTheme();
    this.btn.addEventListener('click', () => {
      document.body.classList.toggle('theme__light')
      document.body.classList.toggle('theme__dark')
      this.setTheme()
    })
  }

  get template() {
    return document.getElementById(themeToggleTemplate.id).content.cloneNode(true)
  }
}

ThemeToggle.register()