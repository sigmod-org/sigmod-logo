# sigmod-logo

Candidates for a new ACM SIGMOD logo, kept apart from the main site
([sigmod-org/www.sigmod.org](https://github.com/sigmod-org/www.sigmod.org)).
The main site keeps the 1998 logo until one is chosen.

```bash
npm install
npm run serve     # http://localhost:8081
npm run build     # static site in _site/
```

- `src/index.njk`: the proposals page (the four candidates, then prior approaches).
- `src/_includes/logos.njk`: every drawing as a Nunjucks macro, so one drawing
  renders in any colour and size. Wordmarks use live web fonts; outline them
  before final delivery.
- `src/assets/`: the 1998 logo (`sigmod-current.png`) and the ribbon join icon.

Every push to `main` publishes the site on GitHub Pages
(`.github/workflows/pages.yml`).
