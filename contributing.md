
## Contributing

### A Quick Note

This project is maintained by one person, and I have a full-time job and other projects. While I generally want to
help and continue to provide updates, I am not always going to be quick to respond or react to everything.

Please manage your expectations accordingly.

### Where should certain things go?

- If you have a question, please use the [Discussions](https://github.com/kbjr/node-cards/discussions) section
- If you have a bug or feature request, please use the [Issues](https://github.com/kbjr/node-cards/issues) section

### Pull Requests

Pull Requests are welcome, given the following:

- Attempt to generally follow the same coding style that already exists in the library. I don't have a styleguide or linter setup at the moment, and I don't really want to have to police such things if I don't have to; Please don't make me.
- See `.editorconfig` and `.prettierrc.js` for minimal style guidance.
- There is CI running in GitHub Actions; Please make sure that all builds succeed and pass all existing tests.
- On the point of tests: there aren't very many at the moment, so I won't say its a requirement to add new tests if you add new code, but I also won't stop you...
- Please don't make unneccesary breaking changes

### Important Commands and Such

#### Build Source Code

```bash
$ npm run build
```

#### Rebuild Documentation

```bash
$ npm run docs
```

#### Run Tests

```bash
$ npm test
```

#### Delete All Build Files

```bash
$ npm run clean
```
