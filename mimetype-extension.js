exports.get = (ext) => {
    switch(ext) {
        //FILES
        case "html":
            return 'text/html'
        case "xml":
            return 'text/xml'
        case "webmanifest":
            return 'application/manifest+json'
        case "txt":
            return 'text/plain'
        case "pdf":
            return 'application/pdf'
        case "css":
            return 'text/css'
        case "js":
            return 'application/javascript'
        case "json":
            return "application/json"
        case "md":
            return "text/markdown"

        //IMAGES
        case "png":
            return 'image/png'
        case "svg":
            return 'image/svg+xml'
        case "ico":
            return 'image/x-icon'
        case "jpg":
            return "image/jpeg"
        case "jpeg":
            return "image/jpeg"

        //AUDIOS
        case "audio-ogg":
            return "audio/ogg"
        case "audio-webm":
            return "audio/webm"
        case "mp3":
            return "audio/mpeg"
        case "wav":
            return "audio/wav"

        //VIDEOS
        case "mp4":
            return "video/mp4"
        case "ogg":
            console.log("[headers warning !] .get(\"ogg\") return a VIDEO header for the ogg format, you can specify .get(\"audio-ogg\") for an audio format and .get(\"video-ogg\") for a video format. Have a good day !")
            return "video/ogg"
        case "video-ogg":
            return "video/ogg"
        case "webm":
            console.log("[headers warning !] .get(\"webm\") return a VIDEO header for the webm format, you can specify .get(\"audio-webm\") for an audio format and .get(\"video-webm\") for a video format. Have a good day !")
            return "video/ogg"
        case "video-webm":
            return "video/webm"

        //FONTS
        case "ttf":
            return 'application/x-font-ttf'
        case "woff2":
            return 'application/font-woff2'
        case "eot":
            return 'font/eot'
        case "woff":
            return 'application/font-woff'

        //OTHER
        default:
            return "application/octet-stream"
    }
}
