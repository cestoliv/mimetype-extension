exports.get = (ext) => {
    switch(ext) {
        //FILES
        case "html":
            return 'text/html'
        case "htm":
            return 'text/html'
        case "xhtml":
            return 'application/xhtml+xml'
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
        case "abw":
            return "application/x-abiword"
        case "azw":
            return "application/vnd.amazon.ebook"
        case "bin":
            return "application/octet-stream"
        case "csh":
            return "application/x-csh"
        case "csv":
            return "text/csv"
        case "doc":
            return "application/msword"
        case "docx":
            return "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        case "epub":
            return "application/epub+zip"
        case "ics":
            return "text/calendar"
        case "mpkg":
            return "application/vnd.apple.installer+xml"
        case "odp":
            return "application/vnd.oasis.opendocument.presentation"
        case "ods":
            return "application/vnd.oasis.opendocument.spreadsheet"
        case "odt":
            return "application/vnd.oasis.opendocument.text"
        case "ogx":
            return "application/ogg"
        case "ppt":
            return "application/vnd.ms-powerpoint"
        case "pptx":
            return "application/vnd.openxmlformats-officedocument.presentationml.presentation"
        case "rtf":
            return "application/rtf"
        case "sh":
            return "application/x-sh"
        case "swf":
            return "application/x-shockwave-flash"
        case "ts":
            return "application/typescript"
        case "vsd":
            return "application/vnd.visio"
        case "xls":
            return "application/vnd.ms-excel"
        case "xlsx":
            return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        case "xml":
            return "application/xml"
        case "xul":
            return "application/vnd.mozilla.xul+xml"

        //ARCHIVES
        case "arc":
            return "application/octet-stream"
        case "bz":
            return "application/x-bzip"
        case "bz2":
            return "application/x-bzip2"
        case "jar":
            return "application/java-archive"
        case "rar":
            return "application/x-rar-compressed"
        case "tar":
            return "application/x-tar"
        case "zip":
            return "application/zip"
        case "7z":
            return "application/x-7z-compressed"

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
        case "gif":
            return "image/gif"
        case "tif":
            return "image/tiff"
        case "tiff":
            return "image/tiff"
        case "webp":
            return "image/webp"

        //AUDIOS
        case "oga":
            return "audio/ogg"
        case "weba":
            return "audio/webm"
        case "mp3":
            return "audio/mpeg"
        case "wav":
            return "audio/wav"
        case "aac":
            return "audio/aac"
        case "midi":
            return "audio/midi"
        case "mid":
            return "audio/midi"

        //VIDEOS
        case "mp4":
            return "video/mp4"
        case "ogg":
            return "video/ogg"
        case "ogv":
            return "video/ogg"
        case "webm":
            return "video/webm"
        case "avi":
            return "video/x-msvideo"
        case "mpeg":
            return "video/mpeg"

        //FONTS
        case "ttf":
            return 'application/x-font-ttf'
        case "woff2":
            return 'application/font-woff2'
        case "eot":
            return 'application/vnd.ms-fontobject'
        case "woff":
            return 'application/font-woff'
        case "otf":
            return 'font/otf'

        //OTHER
        default:
            return "application/octet-stream"
    }
}
