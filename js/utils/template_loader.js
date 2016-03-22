'use strict'

var TemplateLoader = (function(){

  function require(templateName, callback){
    var template = $('#template_' + templateName)
    if (template.length === 0) {
        var tmpl_dir = './templates'
        var tmpl_url = tmpl_dir + '/' + templateName + '.tmpl'
        var tmpl_string = ''

        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: true,
            contentType: 'text'
        }).then(function(data) {
            tmpl_string = data
            $('head').append('<script id="template_' +
            templateName + '" type="text/template">' + tmpl_string + '<\/script>')
            callback()
        })
    }
  }

  return {
    require: require
  }

})()
