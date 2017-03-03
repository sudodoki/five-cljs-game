# Local development setup

Prerequisites: Ruby, Java

Hacking on code:
```
lein figwheel
```

Building for github pages
```
lein with-profile prod minify-assets
lein do clean, with-profile prod cljsbuild once app
```

Serving gh-pages build locally:
```
; do the build here
cd dist
bundle install
bundle exec jekyll serve --watch
```

'Deploying' to github pages
```
git subtree push --prefix dist origin gh-pages
```
