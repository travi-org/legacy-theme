travi.test.testCase('Blog Entry Tests', (function () {
    'use strict';

    var home = travi.org.home,
        templates = travi.templates,

        templateName = 'blogPreview',
        templateCallback,
        ajaxSuccess,
        beforeAjax,
        ajaxComplete;

    return {
        setUp: function () {
            $('body').html('<div id="blogList"><dl></dl></div>');

            sinon.stub($, 'ajax', function (options) {
                ajaxSuccess = options.success;
                beforeAjax = options.beforeSend;
                ajaxComplete = options.complete;
            });

            sinon.stub(templates, 'render', function (name, data, callback) {
                if (templateName === name) {
                    templateCallback = callback;
                }
            });

            home.init();
        },

        tearDown: function () {
            travi.test.common.restore([
                $.ajax,
                travi.templates.render
            ]);
        },

        'test that ajax call made to load blog entries': function () {
            sinon.assert.calledWith($.ajax, sinon.match({
                url: '/entries',
                type: 'get',
                dataType: 'json'
            }));
        },

        'test that list marked as loading when first call made for entries': function () {
            beforeAjax();

            assertTrue($('#blogList dl').hasClass('loading'));
        },

        'test that list un-marked as loading when ajax completed': function () {
            ajaxComplete();

            assertFalse($('#blogList dl').hasClass('loading'));
        },

        'test that returned entries rendered in template': function () {
            var data = {
                some: 'data'
            };

            ajaxSuccess(data);

            sinon.assert.calledWith(templates.render, templateName, data);
        },

        'test that returned entries added to list in DOM': function () {
            templateCallback('<dt>title</dt><dd>summary</dd>');

            assertEquals(1, $('#blogList dl dt').length);
            assertEquals(1, $('#blogList dl dd').length);
        }
    };
}()));