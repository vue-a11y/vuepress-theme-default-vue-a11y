# Setup

We created a vuepress theme to facilitate the maintenance of the documentation for Vue-a11y, it is a work in progress, but it is available for anyone who wants to use and contribute.

It does not replace the default vuepress theme, however, this theme contains most Vue-a11y packages and some plugins to improve semantics and accessibility in the documentation.

## Installation

### NPM

```shell
npm install -D vuepress-theme-default-vue-a11y
# or
yarn add -D vuepress-theme-default-vue-a11y
```

## Usage

You just need to add the theme to your `.vuepress/config.js` file.

```javascript
// e.g. docs/.vuepress/config.js
module.exports = {
  theme: 'vuepress-theme-default-vue-a11y', // or 'default-vue-a11y'
  // ...
```