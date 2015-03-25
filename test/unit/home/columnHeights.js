travi.test.testCase('Column Heights Tests', (function () {
    'use strict';

    return {
        home: travi.org.home,

        setUp: function () {
            $('body').append($.render.columns({}));
            sinon.stub($, 'ajax');
        },

        tearDown: function () {
            travi.test.common.restore([
                $.fn.equalizeBottoms,
                $.ajax
            ]);
        },

        'test column heights equal after initialization': function () {
            expectAsserts(1);

            sinon.stub($.fn, 'equalizeBottoms', this.assertProperSelector);

            this.home.init();
        },

        'test height adjusted when first column height changes': function () {
            this.home.init();
            expectAsserts(1);

            sinon.stub($.fn, 'equalizeBottoms', this.assertProperSelector);

            $('#blogList .entry-message').append('<dt>some more content</dt>').trigger('announce-update');
        },

        'test height adjusted when second column height changes': function () {
            this.home.init();
            expectAsserts(1);

            sinon.stub($.fn, 'equalizeBottoms', this.assertProperSelector);

            $('#announcementsList')
                .find('.entry-message')
                .append('<dt>some more content</dt>')
                .trigger('announce-update');
        },

        assertProperSelector: function () {
            assertEquals('.updateList dl', $(this).selector);
            return this;
        }
    };
}()));