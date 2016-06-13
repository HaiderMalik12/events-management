Template.registerHelper('markdown', function(text) {
    var converter = new showdown.Converter();
    return converter.makeHtml(text);
});