const marked = require("marked");
const santizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown"); 


function sanitizedMarkedDown(markedDown){
    const turndownService = new TurndownService();

    const html = marked.parse(markedDown);

    const sanitizeHtml = santizeHtmlLibrary(html,{
        allowedTags : santizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });

    const sanitizedMarkedDown = turndownService.turndown(sanitizeHtml);

    return sanitizedMarkedDown;

}

module.exports = sanitizedMarkedDown;