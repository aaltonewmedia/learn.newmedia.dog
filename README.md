# [learn.newmedia.dog](https://learn.newmedia.dog)

## Development

Use **Hugo 0.166.0** (standard or extended). The theme is pinned to
[Hugo Book v0.15.0](https://github.com/alex-shpak/hugo-book/releases/tag/v0.15.0)
as a Git submodule. Netlify uses the same Hugo version in all build contexts.

```sh
git submodule update --init --recursive
hugo server
```

Include draft and future lessons when needed:

```sh
hugo server --buildDrafts --buildFuture
```

Build for production:

```sh
hugo --minify
```

## Site customizations

- `assets/styles/custom.css` contains the New Media colors, typography, tables,
  sidebar controls, and breadcrumb styling. Hugo Book now uses native CSS;
  Sass and Hugo Extended are no longer required.
- `layouts/list.html` and `layouts/single.html` preserve the custom page titles,
  section listings, and metadata. Partials and shortcodes use Hugo's current
  `layouts/_partials` and `layouts/_shortcodes` directories.
- The `hint` and `details` shortcodes retain Markdown rendering for existing
  `{{< ... >}}` calls. The theme's new tab implementation supplies unique IDs.
- Breadcrumbs use Hugo's page hierarchy. The custom footer retains commit links,
  and `docs/text/template.html` avoids the theme's deprecated Page JSON fields.
- `static/js/anchortracking.js` highlights visible headings in the table of
  contents. The existing lightbox and audio/video/p5.js/asciinema embeds remain.
- Draft sections use `cascade: { draft: true }` to keep their descendants out of
  production builds. Redundant `draft: false` values beneath those sections were
  removed so they inherit the section's status. To publish a complete section,
  remove both its `draft: true` and its draft cascade.

The build still reports unresolved links and image references already present
in course material. Some theme link-check warnings also refer to files in
`static/` or Hugo shortcode placeholders; these are separate from compatibility
or deprecation errors.
