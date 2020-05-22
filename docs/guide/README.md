# Test page

::: figurecode my caption
```html
<button aria-label="close" aria-describedby="descriptionClose">X</button>
<div id="descriptionClose" hidden>
  Se você cancelar perderá as informações inseridas no campo XXX e será 
  enviado para a página anterior.
</div>
```
:::


---

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

---

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

---

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

:tada: :100:

---

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code
```js
console.log('Hello, VuePress!')
```
:::
