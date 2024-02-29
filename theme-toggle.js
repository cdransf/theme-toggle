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

    this.root = document.getElementsByTagName('html')[0];
    this.button = this.querySelector('button')
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    this.currentTheme = sessionStorage?.getItem('theme')
    this.theme
    this.setTheme = () => {
      if (!this.currentTheme) sessionStorage?.setItem('theme', (this.prefersDarkScheme ? 'dark' : 'light'))

      if (this.prefersDarkScheme) {
        this.theme = this.root.classList.contains('theme__light') ? 'light' : 'dark'
      } else {
        this.theme = this.root.classList.contains('theme__dark') ? 'dark' : 'light'
      }
      sessionStorage?.setItem('theme', this.theme)
    }
    this.setTheme();
    this.button.addEventListener('click', () => {
      this.root.classList.toggle('theme__light')
      this.root.classList.toggle('theme__dark')
      this.setTheme()
    })
  }
}

ThemeToggle.register();