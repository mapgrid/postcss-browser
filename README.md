<h2 align="center">PostCSS [Browser]</h2>
<p align="center">
    Browser build of <a href="https://github.com/postcss/postcss">PostCSS</a>.
    Automatically tracks latest PostCSS release.
</p>

<p align="center">
    <a href="https://github.com/mapgrid/postcss-browser/releases"><img src="https://github.com/mapgrid/postcss-browser/workflows/Publish/badge.svg" alt="Status"></a>
    <a href="https://github.com/mapgrid/postcss-browser/releases"><img src="https://img.shields.io/npm/v/postcss-browser.svg" alt="Latest Release"></a>
</p>

------

## Documentation

```js
import postcss from 'postcss-browser'

postcss([
    // plugins
]).process(`
    /* css */
`, {
    from: undefined,
}).then(result => {
    console.log(result.css)
})
```
