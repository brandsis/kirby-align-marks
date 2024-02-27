# Kirby Writer alignment marks

This plugin allows you to add text-center and text-right custom marks to the Kirby Writer field when used in a text block.

## Installation

Download, extract and copy this repository to `/site/plugins/align-marks`.

## Usage

The plugin is intended for use with the Writer field when used inside text blocks. So, to get the text-center and text-right marks to appear in the Writer field, you should add them to a custom text block blueprint located at `/site/blueprints/blocks/text.yaml`. Here is an sample...

```
    name: field.blocks.text.name
    icon: text
    wysiwyg: true
    preview: text
    fields:
      text:
        type: writer
        nodes:
          - heading
          - paragraph
          - bulletList
          - orderedList
        marks:
          - bold
          - italic
          - underline
          - strike
          - sup
          - center
          - right
          - code
          - link
          - clear
        placeholder: Text...
```

When the text-center or text-right alignment mark is clicked, the selected content is wrapped in a `<span>` with a custom class &nbsp; `txt-c` or `txt-r` respectively &nbsp; inside the block-level `<p>` or `<hX>` element. The class is added both in the Panel and in the front-end. The marks act as toggles, so clicking again will remove the `<span>`.

To style the class in the front-end, add this code to your main CSS file...

```
    *:has(> *[class*="txt-c"]) {
      text-align: center;
    }

    *:has(> *[class*="txt-r"]) {
      text-align: center;
    }
```

If you want content to appear centred or right-aligned in the Panel preview, add this code to an `/assets/panel.css` file...

```
    .k-writer .ProseMirror *:has(> span[class*="txt-c"]) {
      text-align: center;
    }

    .k-writer .ProseMirror *:has(> span[class*="txt-r"]) {
      text-align: right;
      }
```

If you want to change the names of the custom classes, edit the stylesheets, as above, and the relevant code in `index.js`.

**Note:** the plugin only includes text-center and text-right buttons because in LTR languages content defaults to left-aligned. To add a text-left mark...

* Add a `left:` section to `index.js`
* Add a `- left` mark to the `text.yml` custom block blueprint
* Add `txt-l` (or similar) styles to the relevant CSS files

## Disclaimer

This plugin is provided "as is" and with no guarantee. You use it at your own risk. Always test it before using it in a production environment.If you find any issues, please [create a new issue](https://github.com/brandsis/kirby-align-marks/issues/new).

## License

[MIT](https://choosealicense.com/licenses/mit/)