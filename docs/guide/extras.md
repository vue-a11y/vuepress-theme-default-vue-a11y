# Extras

## Figurecode

The `<figure>` element can also be used for code blocks, so we've added a way for you to easily use your `.md` file via custom block.

**e.g.**

```
::: figurecode Using <code>&lt;small&gt;</code> around a <a href="http://creativecommons.org/choose/" title="Choose a License">Creative Commons license</a> link with <code>rel="license"</code>
```html
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
``
:::
```

**Output**

::: figurecode Using <code>&lt;small&gt;</code> around a <a href="http://creativecommons.org/choose/" title="Choose a License">Creative Commons license</a> link with <code>rel="license"</code>
```html
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
```
:::

### References: &lt;figure&gt; and &lt;figcaption&gt; for code
- [https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html](https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html)
- [https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element)
- [http://html5doctor.com/the-figure-figcaption-elements/](http://html5doctor.com/the-figure-figcaption-elements/)


## External links

This theme automatically adds a warning to screen reader users that the external link will "opens in a new window".

It is a temporary solution until we create a way to add the notice inside the external link through the markup generator itself.

<blockquote>
  <p>
    The objective of this technique is to provide a warning before automatically opening a new window or tab. Opening new windows automatically when a link is activated can be disorienting for people who have difficulty perceiving visual content, and for some people with cognitive disabilities, if they are not warned in advance. Providing a warning allows the user to decide it they want to leave the current window, and the warning will help them find their way back, if they do decide they would like to go to the new window. It will help them understand that the "back" button will not work and that they have to return to the last window they had open, in order to find their previous location.
  </p>
  <footer>
    <cite>
      <a href="https://www.w3.org/TR/WCAG20-TECHS/G201.html">G201 WCAG technique</a>
    </cite>
  </footer>
</blockquote>

**e.g.**

```
[External Link](https://vue-a11y.com)
```

**Output**

[External Link](https://vue-a11y.com)

```javascript
// e.g. docs/.vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-default-vue-a11y',
  themeConfig: {
    locales: {
      '/': {
        externalLinkTextSrOnly: 'opens in a new window'   // optional 
      },
      '/pt': {
        externalLinkTextSrOnly: 'abre em uma nova janela'
      },
      '/es': {
        externalLinkTextSrOnly: 'se abre en una nueva ventana'
      }
    }
  }
```

### References
- [https://www.w3.org/TR/WCAG20-TECHS/G201.html](https://www.w3.org/TR/WCAG20-TECHS/G201.html)
- [https://medium.com/@svinkle/why-let-someone-know-when-a-link-opens-a-new-window-8699d20ed3b1](https://medium.com/@svinkle/why-let-someone-know-when-a-link-opens-a-new-window-8699d20ed3b1)