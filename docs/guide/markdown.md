# Test page

**figure and figcaption code block**
<br>
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

::: figurecode Using Using <code>&lt;small&gt;</code> around a <a href="http://creativecommons.org/choose/" title="Choose a License">Creative Commons license</a> link with <code>rel="license"</code>
```html
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
```
:::

---

**code**
<br>
```md
Use `console.log`
```

Use `console.log`

---

**Simple code block**
<br>
```md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
``
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

**Link**
<br>
```md
[Internal Link](/guide)
```
[Internal Link](/guide)

---

**Notes**
<br>
```md
::: tip
This is a tip
:::
```

::: tip
This is a tip
:::

```md
::: warning
This is a warning
:::
```

::: warning
This is a warning
:::

```md
::: danger
This is a dangerous warning
:::
```

::: danger
This is a dangerous warning
:::

```md
::: danger STOP
Danger zone, do not proceed
:::
```

::: danger STOP
Danger zone, do not proceed
:::

---

**Table**
<br>
```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

**Emojis** 
<br>
```md
:tada: :100:
```

:tada: :100:

---

**External link** 
<br>
```md
[External Link](https://google.com)
```

[External Link](https://google.com)

---

**Details**
<br>
```md
::: details
This is a details block, which does not work in IE / Edge
:::
```

::: details
This is a details block, which does not work in IE / Edge
:::


**Details with code block**
<br>
```md
::: details Click me to view the code
```js
console.log('Hello, VuePress!')
``
:::
```

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::
