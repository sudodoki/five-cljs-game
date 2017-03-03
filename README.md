# Local development setup

Prerequisites: Ruby, Java

Hacking on code:
```
rlwrap lein figwheel
; be aware it will be ran on http://localhost:3449/five-cljs-game
```

Building for github pages
```
lein do clean, with-profile prod minify-assets, with-profile prod cljsbuild once app
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
; git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages
```
