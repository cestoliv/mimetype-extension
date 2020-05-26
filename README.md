# headersfromextension
Javascript module to retrieve the header of a file from its extension (for example for node)

## Installation
`npm install --save headersfromextensions`
  
In your node js application:

`var headers = require("headersfromextensions")`
  
## Utilisation
`headers.get("png") return "image/png"`

`headers.get("ttf") return "application/x-font-ttf"`
  
So you can do :

`res.setHeader('Content-Type', headers.get("js"))`