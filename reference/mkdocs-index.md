# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## References

- [Material Extensions](https://squidfunk.github.io/mkdocs-material/setup/extensions/)
- [Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)

### Usage

#### [Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) (callouts)

```markdown
!!! type "Optional Title"

    Text
```

Collapsible: change `!!!` to `???`

Collapsible but expanded on load: `???+`

| Type       | Color         | Icon                 |
| ---------- | ------------- | -------------------- |
| `note`     | blue          | pencil               |
| `abstract` | lighter blue  | clipboard            |
| `info`     | teal          | circle i             |
| `tip`      | greenish teal | flame                |
| `success`  | green         | checkmark            |
| `question` | yellow green  | circle question mark |
| `warning`  | orange        | triangle exclamation |
| `failure`  | red           | x                    |
| `danger`   | red           | circle lightning     |
| `bug`      | red           | shield bug           |
| `example`  | purple        | test tube            |
| `quote`    | gray          | quotes               |

### [Annotations](https://squidfunk.github.io/mkdocs-material/reference/annotations/)

Requires: a marker, the `annotate` class, the content.

```markdown
Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, *formatted
    text*, images, ... basically anything that can be expressed in Markdown.
```

### [Footnotes](https://squidfunk.github.io/mkdocs-material/reference/footnotes/)

Footnote reference: `[^1]`, `[^2]`

```markdown
[^1]: Same line.
```

```markdown
[^2]:
    Paragraph starts on next line and is indented by 4 spaces.
```

### [Formatting]()

```markdown
Text can be {--deleted--} and replacement text {++added++}. This can also be combined into `{~~one~>a single~~}` operation. {==Highlighting==} is also possible {>>and comments can be added inline<<}.

{==

Formatting can also be applied to blocks by putting the opening and closing tags on separate lines and adding new lines between the tags and the content.

==}
```

- ==This was marked== `==highlight==`
- <u>This was inserted</u> `^^underline^^`
- ~~This was deleted~~ `~~strikethrough)~~`
- Subscripts use `~`: `H~2~O` gives H~2~O
- Superscripts use `^`: `A^T^A` gives A^T^A
- Keyboard keys use `++<key>++`: `++ctrl+alt+del++`
  - [Key symbols](https://facelessuser.github.io/pymdown-extensions/extensions/keys/#extendingmodifying-key-map-index)

### [Definition Lists](https://facelessuser.github.io/pymdown-extensions/extensions/keys/#extendingmodifying-key-map-index)

```markdown
Term

:   Definition
```

### [Task Lists](https://squidfunk.github.io/mkdocs-material/reference/lists/#using-task-lists)

``` markdown
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit
- [ ] Vestibulum convallis sit amet nisi a tincidunt
    * [x] In hac habitasse platea dictumst
    * [x] In scelerisque nibh non dolor mollis congue sed et metus
    * [ ] Praesent sed risus massa
- [ ] Aenean pretium efficitur erat, donec pharetra, ligula non scelerisque
```

### [Tooltips](https://squidfunk.github.io/mkdocs-material/reference/tooltips/)

Link with tooltip, inline:

```markdown
[Hover me](https://example.com "I'm a tooltip!")
```

Anything else:

```markdown
Some content here.{ title="Important information" }
```

#### Abbreviations

```markdown
The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
```

