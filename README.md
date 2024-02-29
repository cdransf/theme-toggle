# `<theme-toggle>` web component

A web component that simplifies controlling light/dark theming for a site.

```
npm i @cdransf/theme-toggle
```

---

## Example usage

Add the `theme-load.js` to your document `<body>` to prevent an unthemed flash on load. This ensures access to the `document`.

```html
<body>
  <script type="module" src="/scripts/theme-load.js"></script>
</body>
```

Add the `theme-toggle.js` to your markup, set your template (the `.light` and `.dark` tag contents are intended to be specified when this is leveraged). The SVGs below are examples from the [Tabler Icons](https://tabler.io/icons) set.

```html
<script type="module" src="/scripts/components/theme-toggle.js"></script>
<li class="client-side">
  <theme-toggle>
    <button
      class="theme__toggle"
      aria-label="Toggle site theme">
      <span class="light">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
      </span>
      <span class="dark">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
      </span>
    </button>
  </theme-toggle>
</li>
```

You will, also, need to style the component and set light and dark styles for your site. Examples below.

```css
.theme__toggle {
  background: transparent;
  padding: 0;
}

.theme__toggle svg {
  cursor: pointer;
}

.theme__toggle:hover,
.theme__toggle svg:hover {
  stroke-width: var(--stroke-width-bold);
}

.theme__toggle > .light svg { stroke: var(--sun) !important; }
.theme__toggle > .dark svg { stroke: var(--moon) !important; }

.theme__toggle > .light ,
.theme__toggle > .dark {
  display: none;
}

.theme__dark .theme__toggle > .light {
  display: inline;
}

.theme__dark .theme__toggle > .dark {
  display: none;
}

.theme__light .theme__toggle > .light {
  display: none;
}

.theme__light .theme__toggle > .dark {
  display: inline;
}
```

**Theme styles:**

```css
  /* base theme */
  --color-lightest: var(--white);
  --color-darkest: var(--black);
  --text-color: var(--color-darkest);
  --background-color: var(--color-lightest);
  --text-color-inverted: var(--color-lightest);
  --background-color-inverted: var(--color-darkest);
  --accent-color: var(--blue-600);
  --accent-color-hover: var(--blue-800);
  --selection-color: var(--accent-color);

  /* dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: var(--color-lightest);
    --background-color: var(--color-darkest);
    --text-color-inverted: var(--color-darkest);
    --background-color-inverted: var(--color-lightest);
    --accent-color: var(--blue-400);
    --accent-color-hover: var(--blue-200);
    --gray-light: var(--gray-900);
    --gray-lighter: var(--gray-950);
    --gray-dark: var(--gray-300);
    --brand-github: #f5f5f5;
  }
}

/* light theme */
:root.theme__light {
  --text-color: var(--color-darkest);
  --background-color: var(--color-lightest);
  --text-color-inverted: var(--color-lightest);
  --background-color-inverted: var(--color-darkest);
  --accent-color: var(--blue-600);
  --accent-color-hover: var(--blue-800);
  --selection-color: var(--accent-color);
  --gray-light: var(--gray-200);
  --gray-lighter: var(--gray-50);
  --gray-dark: var(--gray-700);
  --brand-github: #333;
}

/* dark theme */
:root.theme__dark {
  --text-color: var(--color-lightest);
  --background-color: var(--color-darkest);
  --text-color-inverted: var(--color-darkest);
  --background-color-inverted: var(--color-lightest);
  --accent-color: var(--blue-400);
  --accent-color-hover: var(--blue-200);
  --gray-light: var(--gray-900);
  --gray-lighter: var(--gray-950);
  --gray-dark: var(--gray-300);
  --brand-github: #f5f5f5;
}
```