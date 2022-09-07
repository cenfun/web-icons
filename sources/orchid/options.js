const path = require('path');
const SFE = require('svg-font-extractor');

module.exports = {
    name: 'orchid-icons',
    url: 'https://github.com/orchidsoftware/icons',

    moduleFilters: 'dist/fonts/o-icon.svg',

    dirs: function(Util, modulePath) {

        SFE({
            input: path.resolve(modulePath, 'dist/fonts/o-icon.svg'),
            output: path.resolve(modulePath, 'svg'),
            onSVGItem: function(item) {

                const name = item['glyph-name'];
                if (!name || !item.d) {
                    return;
                }

                item.name = name.replace(/_/g, '-');

                return item;
            }
        });

        return 'svg';
    },

    onSVGDocument: function($svg, item) {
        $svg.attr('fill', 'currentColor');
    }

};
