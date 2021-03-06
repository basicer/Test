{
    "default": {
        "programmableCSSProperties": [
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "padding",
            "padding-bottom",
            "padding-left",
            "padding-right",
            "padding-top",
            "height",
            "width",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-color",
            "border-left",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-right",
            "border-right-color",
            "border-right-style",
            "border-right-width",
            "border-style",
            "border-top",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-width",
            "outline",
            "outline-color",
            "outline-style",
            "outline-width",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-image",
            "border-image-outset",
            "border-image-repeat",
            "border-image-slice",
            "border-image-source",
            "border-image-width",
            "border-radius",
            "border-top-left-radius",
            "border-top-right-radius",
            "box-decoration-break",
            "box-shadow",
            ".class",
            "#id",
            "*",
            "element",
            "element,element",
            "element element",
            "element>element",
            "element+element",
            "[attribute]",
            "[attribute=value]",
            "[attribute~=value]",
            "[attribute|=value]",
            "element1~element2",
            "[attribute^=value]",
            "[attribute$=value]",
            "[attribute*=value]",
            ":link",
            ":visited",
            ":active",
            ":hover",
            ":focus",
            ":first-letter",
            ":first-line",
            ":first-child",
            ":before",
            ":after",
            ":lang(language)",
            ":first-of-type",
            ":last-of-type",
            ":only-of-type",
            ":only-child",
            ":nth-child(n)",
            ":nth-last-child(n)",
            ":nth-of-type(n)",
            ":last-child",
            ":not",
            ":root",
            ":empty",
            ":target",
            ":enabled",
            ":disabled",
            ":checked",
            "::selection",
            "background",
            "background-attachment",
            "background-color",
            "background-image",
            "background-position",
            "background-repeat",
            "background-clip",
            "background-origin",
            "background-size",
            "color-profile",
            "opacity",
            "rendering-intent",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "@font-face",
            "font-size-adjust",
            "font-stretch",
            "bottom",
            "clear",
            "clip",
            "cursor",
            "display",
            "float",
            "left",
            "overflow",
            "position",
            "right",
            "top",
            "visibility",
            "z-index",
            "target",
            "target-name",
            "target-new",
            "target-position",
            "color",
            "direction",
            "letter-spacing",
            "line-height",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-transform",
            "unicode-bidi",
            "vertical-align",
            "white-space",
            "word-spacing",
            "text-outline",
            "text-overflow",
            "text-shadow",
            "text-wrap",
            "word-break",
            "word-wrap",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "border-collapse",
            "border-spacing",
            "caption-side",
            "empty-cells",
            "table-layout",
            "marquee-direction",
            "marquee-play-count",
            "marquee-speed",
            "marquee-style",
            "overflow-x",
            "overflow-y",
            "overflow-style",
            "rotation",
            "box-align",
            "box-direction",
            "box-flex",
            "box-flex-group",
            "box-lines",
            "box-ordinal-group",
            "box-orient",
            "box-pack",
            "alignment-adjust",
            "alignment-baseline",
            "baseline-shift",
            "dominant-baseline",
            "drop-initial-after-adjust",
            "drop-initial-after-align",
            "drop-initial-before-adjust",
            "drop-initial-before-align",
            "drop-initial-size",
            "drop-initial-value",
            "inline-box-align",
            "line-stacking",
            "line-stacking-ruby",
            "line-stacking-shift",
            "line-stacking-strategy",
            "text-height",
            "column-count",
            "column-fill",
            "column-gap",
            "column-rule",
            "column-rule-color",
            "column-rule-style",
            "column-rule-width",
            "column-span",
            "column-width",
            "columns",
            "@keyframes",
            "animation",
            "animation-name",
            "animation-duration",
            "animation-timing-function",
            "animation-delay",
            "animation-fill-mode",
            "animation-iteration-count",
            "animation-direction",
            "animation-play-state",
            "transform",
            "transform-origin",
            "transform-style",
            "perspective",
            "perspective-origin",
            "backface-visibility",
            "transition",
            "transition-property",
            "transition-duration",
            "transition-timing-function",
            "transition-delay",
            "rgb"
        ],
        "programmableHTMLProperties": [
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "img",
            "div",
            "span",
            "i",
            "b",
            "a",
            "ul",
            "ol",
            "li",
            "blockquote",
            "hr",
            "u",
            "br",
            "input",
            "textarea",
            "button",
            "html",
            "head",
            "body",
            "pre",
            "em",
            "strong",
            "dl",
            "dd",
            "dt",
            "table",
            "tr",
            "th",
            "td",
            "form",
            "title",
            "strike",
            "sup",
            "sub",
            "tt",
            "select",
            "option",
            "meta",
            "link",
            "script",
            "style"
        ]
    },
    "type": "object",
    "additionalProperties": false,
    "properties": {
        "programmableHTMLProperties": {
            "type": "array",
            "items": {
                "description": "Name of HTML tags/properties which should be documented",
                "enum": [
                    "p",
                    "h1",
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    "img",
                    "div",
                    "span",
                    "i",
                    "b",
                    "a",
                    "ul",
                    "ol",
                    "li",
                    "blockquote",
                    "hr",
                    "u",
                    "br",
                    "input",
                    "textarea",
                    "button",
                    "html",
                    "head",
                    "body",
                    "pre",
                    "em",
                    "strong",
                    "dl",
                    "dd",
                    "dt",
                    "table",
                    "tr",
                    "th",
                    "td",
                    "form",
                    "title",
                    "strike",
                    "sup",
                    "sub",
                    "tt",
                    "select",
                    "option",
                    "meta",
                    "link",
                    "script",
                    "style"
                ],
                "type": "string"
            }
        },
        "programmableCSSProperties": {
            "type": "array",
            "items": {
                "description": "Name of CSS properties/selectors which should be documented",
                "enum": [
                    "margin",
                    "margin-bottom",
                    "margin-left",
                    "margin-right",
                    "margin-top",
                    "padding",
                    "padding-bottom",
                    "padding-left",
                    "padding-right",
                    "padding-top",
                    "height",
                    "width",
                    "max-height",
                    "max-width",
                    "min-height",
                    "min-width",
                    "border",
                    "border-bottom",
                    "border-bottom-color",
                    "border-bottom-style",
                    "border-bottom-width",
                    "border-color",
                    "border-left",
                    "border-left-color",
                    "border-left-style",
                    "border-left-width",
                    "border-right",
                    "border-right-color",
                    "border-right-style",
                    "border-right-width",
                    "border-style",
                    "border-top",
                    "border-top-color",
                    "border-top-style",
                    "border-top-width",
                    "border-width",
                    "outline",
                    "outline-color",
                    "outline-style",
                    "outline-width",
                    "border-bottom-left-radius",
                    "border-bottom-right-radius",
                    "border-image",
                    "border-image-outset",
                    "border-image-repeat",
                    "border-image-slice",
                    "border-image-source",
                    "border-image-width",
                    "border-radius",
                    "border-top-left-radius",
                    "border-top-right-radius",
                    "box-decoration-break",
                    "box-shadow",
                    ".class",
                    "#id",
                    "*",
                    "element",
                    "element,element",
                    "element element",
                    "element>element",
                    "element+element",
                    "[attribute]",
                    "[attribute=value]",
                    "[attribute~=value]",
                    "[attribute|=value]",
                    "element1~element2",
                    "[attribute^=value]",
                    "[attribute$=value]",
                    "[attribute*=value]",
                    ":link",
                    ":visited",
                    ":active",
                    ":hover",
                    ":focus",
                    ":first-letter",
                    ":first-line",
                    ":first-child",
                    ":before",
                    ":after",
                    ":lang(language)",
                    ":first-of-type",
                    ":last-of-type",
                    ":only-of-type",
                    ":only-child",
                    ":nth-child(n)",
                    ":nth-last-child(n)",
                    ":nth-of-type(n)",
                    ":last-child",
                    ":not",
                    ":root",
                    ":empty",
                    ":target",
                    ":enabled",
                    ":disabled",
                    ":checked",
                    "::selection",
                    "background",
                    "background-attachment",
                    "background-color",
                    "background-image",
                    "background-position",
                    "background-repeat",
                    "background-clip",
                    "background-origin",
                    "background-size",
                    "color-profile",
                    "opacity",
                    "rendering-intent",
                    "font",
                    "font-family",
                    "font-size",
                    "font-style",
                    "font-variant",
                    "font-weight",
                    "@font-face",
                    "font-size-adjust",
                    "font-stretch",
                    "bottom",
                    "clear",
                    "clip",
                    "cursor",
                    "display",
                    "float",
                    "left",
                    "overflow",
                    "position",
                    "right",
                    "top",
                    "visibility",
                    "z-index",
                    "target",
                    "target-name",
                    "target-new",
                    "target-position",
                    "color",
                    "direction",
                    "letter-spacing",
                    "line-height",
                    "text-align",
                    "text-decoration",
                    "text-indent",
                    "text-transform",
                    "unicode-bidi",
                    "vertical-align",
                    "white-space",
                    "word-spacing",
                    "text-outline",
                    "text-overflow",
                    "text-shadow",
                    "text-wrap",
                    "word-break",
                    "word-wrap",
                    "list-style",
                    "list-style-image",
                    "list-style-position",
                    "list-style-type",
                    "border-collapse",
                    "border-spacing",
                    "caption-side",
                    "empty-cells",
                    "table-layout",
                    "marquee-direction",
                    "marquee-play-count",
                    "marquee-speed",
                    "marquee-style",
                    "overflow-x",
                    "overflow-y",
                    "overflow-style",
                    "rotation",
                    "box-align",
                    "box-direction",
                    "box-flex",
                    "box-flex-group",
                    "box-lines",
                    "box-ordinal-group",
                    "box-orient",
                    "box-pack",
                    "alignment-adjust",
                    "alignment-baseline",
                    "baseline-shift",
                    "dominant-baseline",
                    "drop-initial-after-adjust",
                    "drop-initial-after-align",
                    "drop-initial-before-adjust",
                    "drop-initial-before-align",
                    "drop-initial-size",
                    "drop-initial-value",
                    "inline-box-align",
                    "line-stacking",
                    "line-stacking-ruby",
                    "line-stacking-shift",
                    "line-stacking-strategy",
                    "text-height",
                    "column-count",
                    "column-fill",
                    "column-gap",
                    "column-rule",
                    "column-rule-color",
                    "column-rule-style",
                    "column-rule-width",
                    "column-span",
                    "column-width",
                    "columns",
                    "@keyframes",
                    "animation",
                    "animation-name",
                    "animation-duration",
                    "animation-timing-function",
                    "animation-delay",
                    "animation-fill-mode",
                    "animation-iteration-count",
                    "animation-direction",
                    "animation-play-state",
                    "transform",
                    "transform-origin",
                    "transform-style",
                    "perspective",
                    "perspective-origin",
                    "backface-visibility",
                    "transition",
                    "transition-property",
                    "transition-duration",
                    "transition-timing-function",
                    "transition-delay",
                    "rgb"
                ],
                "type": "string"
            }
        }
    }
}