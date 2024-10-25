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
</body>
```

- Add the `theme-toggle.js` to your markup, set your template.
- Add `<meta name="color-scheme" content="light dark">` to your site's header.
- Use `light-dark` to define your preferred colors for each scheme.

[Refer to MDN for documentation on CSS light-dark().](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)