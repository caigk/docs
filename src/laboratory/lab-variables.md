# Variables

The following is a reference of the available data during book's parsing and theme generation.

### Global Variables

| Variable | Description |
| -------- | ----------- |
| `book` | Book-wide information + configuration settings from `book.json`. See below for details. |
| `gitbook` | GitBook specific information |
| `page` | Current page specific information |
| `file` | File associated with the current page specific information |
| `readme` | Information about the Readme |
| `glossary` | Information about the Glossary |
| `summary` | Information about the table of contents |
| `languages` | List of languages for multi-lingual books |
| `output` | Information about the output generator |
| `config` | Dump of the `book.json` |

### Book Variables

| Variable | Description |
| -------- | ----------- |
| `book.[CONFIGURATION_DATA]` | All the `variables` set via the `book.json` are available through the book variable. |
| `book.language` | Current language for a multilingual book |

### GitBook Variables

| Variable | runtime value | Description |
| -------- | ------------- | ----------- |
| `gitbook.time` | {{ gitbook.time }} | The current time (when you run the `gitbook` command) . |
| `gitbook.version` |{{ gitbook.version }} | Version of GitBook used to generate the book |

### File Variables

| Variable | runtime value | Description |
| -------- | ---------- | ----- |
| `file.path` | {{ file.path }} | The path to the raw page |
| `file.mtime` | {{ file.mtime }} | Modified Time. Last time the file was modified |
| `file.type` | {{ file.type }} | The name of the parser used to compile this file (ex: `markdown`, `asciidoc`, etc) |

#### Page Variables

| Variable | runtime value | Description |
| -------- | ------ | ----- |
| `page.title` | {{ page.title }} | Title of the page |
| `page.previous` | {{ page.previous | dump }} | Previous page in the Table of Contents (can be `null`) |
| `page.next` | {{ page.next | dump }} | Next page in the Table of Contents (can be `null`) |
| `page.dir` | {{ page.dir }} | Text direction, based on configuration or detected from content (`rtl` or `ltr`) |

#### Table of Contents Variables

| Variable | Description |
| -------- | ----------- |
| `summary.parts` | List of sections in the Table of Contents |
| `summary.parts[0].articles[0].title`= | {{summary.parts[0].articles[0].title}} |
The whole table of contents (`SUMMARY.md`) can be accessed:

`summary.parts[0].articles[0].title` will return the title of the first article.

#### Multi-lingual book Variable

| Variable | runtime value | Description |
| -------- | ------- | ---- |
| `languages.list` | {{ languages.list | dump }} | List of languages for this book |

Languages are defined by `{ id: 'en', title: 'English' }`.

### Output Variables

| Variable | runtime value | Description |
| -------- | ------- | ---- |
| `output.name` | {{ output.name }} | Name of the output generator, possible values are `website`, `json`, `ebook` |
| `output.format` | {{ output.format }} | When `output.name == "ebook"`, `format` defines the ebook format that will be generated, possible values are `pdf`, `epub` or `mobi` |

### Readme Variables

| Variable | runtime value | Description |
| -------- | ------ | ----- |
| `readme.path` | {{ readme.path }} | Path to the Readme in the book |

### Glossary Variables

| Variable | runtime value | Description |
| -------- | ----- | ------ |
| `glossary.path` | {{ glossary.path }} | Path to the Glossary in the book |

### config Variables

| Variable | runtime value | Description |
| -------- | ----- | ------ |
| `config.title` | {{ config.title }} | book.json |
| `config.author` | {{ config.author }} | book.json |
