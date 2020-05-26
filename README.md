# mimetype-extension
Javascript module to retrieve the header of a file from its extension (for example for node)

## Installation
`npm install --save mimetype-extension`
  
In your node js application:

`var mime_ext = require('mimetype-extension')`
  
## Utilisation
`mime_ext.get("png") return "image/png"`

`mime_ext.get("ttf") return "application/x-font-ttf"`
  
So you can do :

`res.setHeader('Content-Type', mime_ext.get("js"))`