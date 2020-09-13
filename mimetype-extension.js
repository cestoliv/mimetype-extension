var types = [
    // FILES
    {ext: "html", type: "text/html"},
    {ext: "htm", type: "text/html"},
    {ext: "xhtml", type: "application/xhtml+xml"},
    {ext: "xml", type: "text/xml"},
    {ext: "webmanifest", type: "application/manifest+json"},
    {ext: "txt", type: "text/plain"},
    {ext: "pdf", type: "application/pdf"},
    {ext: "css", type: "text/css"},
    {ext: "js", type: "application/javascript"},
    {ext: "json", type: "application/json"},
    {ext: "md", type: "text/markdown"},
    {ext: "abw", type: "application/x-abiword"},
    {ext: "azw", type: "application/vnd.amazon.ebook"},
    {ext: "bin", type: "application/octet-stream"},
    {ext: "csh", type: "application/x-csh"},
    {ext: "csv", type: "text/csv"},
    {ext: "doc", type: "application/msword"},
    {ext: "docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"},
    {ext: "epub", type: "application/epub+zip"},
    {ext: "ics", type: "text/calendar"},
    {ext: "mpkg", type: "application/vnd.apple.installer+xml"},
    {ext: "odp", type: "application/vnd.oasis.opendocument.presentation"},
    {ext: "ods", type: "application/vnd.oasis.opendocument.spreadsheet"},
    {ext: "odt", type: "application/vnd.oasis.opendocument.text"},
    {ext: "ogx", type: "application/ogg"},
    {ext: "ppt", type: "application/vnd.ms-powerpoint"},
    {ext: "pptx", type: "application/vnd.openxmlformats-officedocument.presentationml.presentation"},
    {ext: "rtf", type: "application/rtf"},
    {ext: "sh", type: "application/x-sh"},
    {ext: "swf", type: "application/x-shockwave-flash"},
    {ext: "ts", type: "application/typescript"},
    {ext: "vsd", type: "application/vnd.visio"},
    {ext: "xls", type: "application/vnd.ms-excel"},
    {ext: "xlsx", type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},
    {ext: "xul", type: "application/vnd.mozilla.xul+xml"},

    // ARCHIVES
    {ext: "arc", type: "application/octet-stream"},
    {ext: "bz", type: "application/x-bzip"},
    {ext: "bz2", type: "application/x-bzip2"},
    {ext: "jar", type: "application/java-archive"},
    {ext: "rar", type: "application/x-rar-compressed"},
    {ext: "tar", type: "application/x-tar"},
    {ext: "zip", type: "application/zip"},
    {ext: "7z", type: "application/x-7z-compressed"},

    // IMAGES
    {ext: "png", type: "image/png"},
    {ext: "svg", type: "image/svg+xml"},
    {ext: "ico", type: "image/x-icon"},
    {ext: "jpg", type: "image/jpeg"},
    {ext: "jpeg", type: "image/jpeg"},
    {ext: "gif", type: "image/gif"},
    {ext: "tif", type: "image/tiff"},
    {ext: "tiff", type: "image/tiff"},
    {ext: "webp", type: "image/webp"},

    // AUDIOS
    {ext: "oga", type: "audio/ogg"},
    {ext: "weba", type: "audio/webm"},
    {ext: "mp3", type: "audio/mpeg"},
    {ext: "wav", type: "audio/wav"},
    {ext: "aac", type: "audio/aac"},
    {ext: "midi", type: "audio/midi"},
    {ext: "mid", type: "audio/midi"},

    // VIDEOS
    {ext: "mp4", type: "video/mp4"},
    {ext: "ogg", type: "video/ogg"},
    {ext: "ogv", type: "video/ogg"},
    {ext: "webm", type: "video/webm"},
    {ext: "avi", type: "video/x-msvideo"},
    {ext: "mpeg", type: "video/mpeg"},

    // FONTS
    {ext: "ttf", type: "application/x-font-ttf"},
    {ext: "woff2", type: "application/x-font-ttf"},
    {ext: "eot", type: "application/vnd.ms-fontobject"},
    {ext: "woff", type: "application/font-woff"},
    {ext: "oft", type: "font/otf"},
]

var default_type = "application/octet-stream"
var defalut_ext = "bin"

exports.type = (ext_wanted) => {
    let founded = ""
    for(i = 0; i < types.length; i++) {
        if(types[i]["ext"] == ext_wanted) {
            founded = types[i]["type"]
            break
        }
    }

    if(!founded || founded == "") {
        founded = default_type
    }

    return founded
}

exports.ext = (type_wanted) => {
    let founded = ""
    for(i = 0; i < types.length; i++) {
        if(types[i]["type"] == type_wanted) {
            founded = types[i]["ext"]
            break
        }
    }

    if(!founded || founded == "") {
        founded = defalut_ext
    }

    return founded
}