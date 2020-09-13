# mimetype-extension
NPM module to find the mime type of a file from an extension, and the extension of a file from a mime type

## Installation
`npm install --save mimetype-extension`
  
In your node js application:

`var mime_ext = require('mimetype-extension')`
  
## Utilisation
Get mime type : 
`mime_ext.type("png") return "image/png"`

`mime_ext.type("ttf") return "application/x-font-ttf"`

Get extension :
`mime_ext.ext("image/png") return "png"`

`mime_ext.ext("application/x-font-ttf") return "ttf"`
  
So you can do :

`res.setHeader('Content-Type', mime_ext.get("js"))`