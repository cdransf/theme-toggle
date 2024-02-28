class ThemeToggle extends HTMLElement {
  static tagName = 'theme-toggle';

  static register(tagName, registry) {
    if(!registry && ('customElements' in globalThis)) {
      registry = globalThis.customElements;
    }
    registry?.define(tagName || this.tagName, this);
  }

  connectedCallback() {
    if (this.shadowRoot) return;

    let shadowroot = this.attachShadow({ mode: 'open' })
    let slot = document.createElement('slot')
    shadowroot.appendChild(slot)

    this.button = this.querySelector('button')
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
    this.button.addEventListener('click', () => {
      document.body.classList.toggle('theme__light')
      document.body.classList.toggle('theme__dark')
      this.setTheme()
    })
  }
}

ThemeToggle.register();