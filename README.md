# Notes To Myself


### Dependencies
The theme is included as a Git submodule. Remember to clone/pull it.

```shell
git clone --recurse-submodules git@github.com:alobbs/alobbs.github.io.git
git pull --recurse-submodules
```

Update theme with: `git submodule update --init --recursive`


### Dev Environment
I used Hugo to generate the site. 

Build with: `hugo --minify`

Spawn a dev server at [http://localhost:1313/](http://localhost:1313/) with:
```shell
hugo server --disableFastRender --buildDrafts --debug
```

### Markdown
In VSCode, enable "Markdown Preview Enhanced" preview: ⌘+k v
