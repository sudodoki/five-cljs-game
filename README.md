# Local development setup

Prerequisites: Ruby, Java

Hacking on code:
```
lein figwheel
```

Building for github pages
```
lein do clean, with-profile prod cljsbuild once app
```

Serving gh-pages build locally:
```
bundle install
bundle exec jekyll serve --watch
```