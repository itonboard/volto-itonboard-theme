
## Use in Volto

i) update main/mrs.developer.json
```bash
{
     "volto-itonboard-theme": {
         "url": "git@github.com:itonboard/volto-itonboard-theme.git",
         "path": "src",
         "package": "@itonboard/volto-itonboard-theme",
         "branch": "master"
     }
}
```

ii) run yarn develop (adds path in main/jsconfig.json if not already configured)
```bash
yarn develop
```
iii) edit main/package.json (`"private": "true"` needs to be `true`)
```bash
  ...
  "private": true,
  "workspaces": [
    "src/addons/volto-itonboard-theme"
  ],
  "addons": [
    ...
    "@itonboard/volto-itonboard-theme"
  ]
```
