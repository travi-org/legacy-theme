module.exports = function (config) {
    config.set({
        frameworks: ['referee'],

        files: [
            {pattern: 'templates/**/*.tmpl', included: false},
            {pattern: 'test/templates/**/*.tmpl', included: false},

            'bower_components/travi-test-utils/tools/assert-cache.js',
            'node_modules/karma-jstd-adapter/jstd-adapter.js',
            'bower_components/travi-test-utils/tools/assert-fix.js',

            'bower_components/jquery/dist/jquery.js',
            'bower_components/jsrender/jsrender.js',
            //'doc_root/resources/thirdparty/moment/moment.js',
            //'doc_root/resources/thirdparty/jquery-equalizebottoms/jquery.ba-equalizebottoms.js',
            //'doc_root/resources/thirdparty/travi-slide-nav/jquery.slideNav.js',
            'test/stubs/sublimevideo.js',
            'test/stubs/ReflectionStub.js',

            'bower_components/travi-test-utils/stubs/modernizrStub.js',
            //'doc_root/resources/thirdparty/travi-test-utils/stubs/amplifyStub.js',
            'thirdparty/lightbox/jquery.lightbox.js',

            'bower_components/travi-core/js/travi.js',
            'bower_components/travi-core/js/travi/templates.js',
            'bower_components/travi-core/js/travi/events.js',
            //'doc_root/resources/thirdparty/travi-core/js/travi/dependencies/*.js',
            //'doc_root/resources/thirdparty/travi-ui/js/pagination.js',
            'test/resources/load-templates.js',

            //'doc_root/resources/js/travi/org.js',
            //'doc_root/resources/js/travi/org/**/*.js',
            'js/video/*.js',
            'js/photos/previewPane.js',
            'js/photos/*.js',


            'bower_components/travi-test-utils/test-init.js',
            'bower_components/travi-test-utils/tools/common.js',

            'test/**/*.js*'
        ],

        browsers: ['PhantomJS']
    });
};
