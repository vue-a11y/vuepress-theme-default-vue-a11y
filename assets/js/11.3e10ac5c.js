(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{372:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styles","aria-label":"Anchor"}},[t._v("#")]),t._v(" Styles")]),t._v(" "),s("h2",{attrs:{id:"override-colors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#override-colors","aria-label":"Anchor"}},[t._v("#")]),t._v(" Override colors")]),t._v(" "),s("p",[t._v("You can easily override the "),s("a",{attrs:{href:"https://github.com/vue-a11y/vuepress-theme-default-vue-a11y/blob/master/styles/palette.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("default palette colors"),s("WarningOpenLinkNewWindow"),t._v(" "),s("OutboundLink")],1),t._v(" by creating the "),s("code",[t._v(".vuepress/styles/palette.styl")]),t._v(" file.")]),t._v(" "),s("p",[s("strong",[t._v("e.g.")])]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$accentColor")]),t._v(" = #3ab982\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$darkAccentColor")]),t._v(" = #3ab982\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sepiaAccentColor")]),t._v(" = #3ab982\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The theme comes with light, dark and sepia color palettes."),s("br"),t._v(" "),s("strong",[t._v("If you don't want to make any of these themes available, just don't include them in the "),s("code",[t._v("colorMode")]),t._v(" property")])])]),t._v(" "),s("h2",{attrs:{id:"add-theme-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-theme-color","aria-label":"Anchor"}},[t._v("#")]),t._v(" Add theme color")]),t._v(" "),s("p",[t._v("To create a new theme is simple, first you need to add this new theme in the props of the colorMode property in themeConfig.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. docs/.vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  themeConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    colorMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      props"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        modes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'high-contrast'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You now need to create the style files where you will create new variables.")]),t._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. docs/.vuepress/styles/palette.styl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBg")]),t._v(" = #000\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSecondary")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lighten")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 8%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastColor")]),t._v(" = #fff\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgCode")]),t._v(" = #111\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSearch")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSecondary")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgCodeBlock")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSecondary")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastAccentColor")]),t._v(" = #1bf4a5\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastTextColorLink")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastAccentColor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBorderColor")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastColor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastTextColorCode")]),t._v(" = #f33bee\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastOutlineColor")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastColor")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgTipDanger")]),t._v(" = #AD0000\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgTipWarning")]),t._v(" = #fdff00\n")])])]),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. docs/.vuepress/styles/index.styl")]),t._v("\nhtml.high-contrast-mode\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBg")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-secondary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSecondary")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgCode")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-search")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgSearch")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-code-block")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgCodeBlock")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastColor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--accent-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastAccentColor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--text-color-link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastTextColorLink")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--border-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBorderColor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--text-color-code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastTextColorCode")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--outline-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastOutlineColor")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-tip-danger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgTipDanger")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("--bg-tip-warning")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$highContrastBgTipWarning")]),t._v("  \n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("You can consult the existing css variables in the theme through "),s("a",{attrs:{href:"https://github.com/vue-a11y/vuepress-theme-default-vue-a11y/blob/master/styles/index.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),s("WarningOpenLinkNewWindow"),t._v(" "),s("OutboundLink")],1)])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"/high-contrast-theme-example.png",alt:"A preview of the theme in high contrast colors framed on an apple safari dark browser"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);