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

  static attr = {
    toggle: 'theme__toggle',
    light: 'theme__light',
    dark: 'theme__dark'
  }

  get toggle() {
    return this.getAttribute(ThemeToggle.attr.toggle) || this.toggle;
  }

  get light() {
    return this.getAttribute(ThemeToggle.attr.light) || this.light;
  }

  get dark() {
    return this.getAttribute(ThemeToggle.attr.dark) || this.dark;
  }

  async connectedCallback() {
    this.append(this.template)
    this.btn = this.querySelector(`.${this.toggle}`)
    this.setTheme = (isOnLoad) => {
      this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      this.currentTheme = localStorage?.getItem('theme')
      this.theme
      if (!this.currentTheme) localStorage?.setItem('theme', (this.prefersDarkScheme ? 'dark' : 'light'))
      if (isOnLoad) {
        if (this.currentTheme === 'dark') {
          document.body.classList.add(this.dark)
        } else if (this.currentTheme === 'light') {
          document.body.classList.add(this.light)
        } else if (this.prefersDarkScheme) {
          document.body.classList.add(this.dark)
        } else if (!this.prefersDarkScheme) {
          document.body.classList.add(this.light)
        }
      }
      if (this.prefersDarkScheme) {
        this.theme = document.body.classList.contains(this.light) ? 'light' : 'dark'
      } else {
        this.theme = document.body.classList.contains(this.dark) ? 'dark' : 'light'
      }
      localStorage?.setItem('theme', this.theme)
    }

    this.setTheme(true);
    this.btn.addEventListener('click', () => {
      document.body.classList.toggle(this.light)
      document.body.classList.toggle(this.dark)
      this.setTheme()
    })
  }

  get template() {
    return document.getElementById(themeToggleTemplate.id).content.cloneNode(true)
  }
}

ThemeToggle.register()