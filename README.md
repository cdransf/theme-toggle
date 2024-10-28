# `<theme-toggle>` web component

A web component that simplifies controlling light/dark theming for a site.

```sh
npm i @cdransf/theme-toggle
```

---

## Example usage

Add the `theme-load.js` to your document `<body>` to prevent an unthemed flash on load. This ensures access to the `document`.

```html
<body>
  <script type="module" src="/scripts/theme-load.js"></script>
   <theme-toggle>
      <button aria-label="Light and dark theme toggle" class="theme-toggle">
        <span class="light"></span>
        <span class="dark"></span>
      </button>
    </theme-toggle>
</body>
```

**Optional attributes:**

- **mode:** accepts either `control` or `toggle` and defaults to `toggle`. If `toggle` is set, you can add `<span class="auto"></span>` and allow the user to cycle back to their system preference.
- **storage:** sets the storage API to be used. Defaults to `sessionStorage`, but can also be set to "`local` for `localStorage`.

- Add the `theme-toggle.js` to your markup, set your template.
- Add `<meta name="color-scheme" content="light dark">` to your site's header.
- Use `light-dark` to define your preferred colors for each scheme.

[Refer to MDN for documentation on CSS light-dark().](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)