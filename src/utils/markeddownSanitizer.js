const marked = require("marked");
const santizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown"); 


function sanitizedMarkedDown(markedDown){
    
    const html = marked.parse(markedDown);

    const sanitizeHtml = santizeHtmlLibrary(html,{
        allowedTags : santizeHtmlLibrary.defaults.allowedTags.concat("img")
    });

    const sanitizedMarkedDown = TurndownService.turndown(sanitizeHtml);

    return sanitizedMarkedDown;

}

module.exports = sanitizedMarkedDown;