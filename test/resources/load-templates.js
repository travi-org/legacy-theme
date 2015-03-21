$.ajaxSetup({
    async: false
});

travi.templates.init();
//travi.templates.preLoad('thumbnail', '/base/doc_root/resources/templates/thumbnail.tmpl');
travi.templates.preLoad('videoStage', '/base/templates/videoStage.tmpl');
travi.templates.preLoad('previewPane', '/base/templates/previewPane.tmpl');
//travi.templates.preLoad('announcementItem', '/base/doc_root/resources/templates/announcementItem.tmpl');

//travi.templates.preLoad('updatesList', '/base/test/js/templates/updatesList.tmpl');
travi.templates.preLoad('thumbs', '/base/test/templates/thumbs.tmpl');
//travi.templates.preLoad('columns', '/base/test/js/templates/columns.tmpl');

travi.templates.preLoad = $.noop;

$.ajaxSetup({
    async: true
});
