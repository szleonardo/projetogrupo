/ **
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * extensões: https://github.com/kayalshri/tableExport.jquery.plugin
 * /

(function ($) {
    'use strict';

    var TYPE_NAME = {
        json: 'JSON',
        xml: 'XML',
        png: 'PNG',
        csv: 'CSV',
        txt: 'TXT',
        sql: 'SQL',
        doc: 'MS-Word',
        excel: 'MS-Excel',
        powerpoint: 'MS-Powerpoint',
        pdf: 'PDF'
    };

    $ .extend ($. fn.bootstrapTable.defaults, {
        showExport: false,
        exportDataType: 'basic', // basic, all, selected
        // 'json', 'xml', 'png', 'csv', 'txt', 'sql', 'doc', 'excel', 'powerpoint', 'pdf'
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel'],
        exportOptions: {}
    });

    var BootstrapTable = $ .fn.bootstrapTable.Constructor,
        _initToolbar = BootstrapTable.prototype.initToolbar;

    BootstrapTable.prototype.initToolbar = function () {
        this.showToolbar = this.options.showExport;

        _initToolbar.apply (this, Array.prototype.slice.apply (argumentos));

        if (this.options.showExport) {
            var que = isso,
                $ btnGroup = this. $ toolbar.find ('>. btn-group'),
                $ export = $ btnGroup.find ('div.export');

            if (! $ export.length) {
                $ exportação = $ ([
                    '<div class = "export btn-group">',
                        '<classe de botão = "btn btn-default dropdown-toggle"'
                            'data-toggle = "dropdown" type = "button">',
                            '<i class = "glyphicon glyphicon-export icon-share"> </i>',
                            '<span class = "caret"> </span>',
                        "</button>",
                        '<ul class = "menu suspenso" role = "menu">',
                        «</ul>»,
                    '</div>'] .join ('')). appendTo ($ btnGroup);

                var $ menu = $ export.find ('. menu suspenso'),
                    exportTypes = this.options.exportTypes;

                if (typeof this.options.exportTypes === 'string') {
                    var types = this.options.exportTypes.slice (1, -1) .replace (/ / g, '') .split (',');

                    exportTypes = [];
                    $ .each (tipos, função (i, valor) {
                        exportTypes.push (value.slice (1, -1));
                    });
                }
                $ .each (exportTypes, function (i, type) {
                    if (TYPE_NAME.hasOwnProperty (type)) {
                        $ menu.append (['<li data-type = "' + type + '">',
                                '<a href="javascript:void(0)">',
                                    TYPE_NAME [tipo],
                                '</a>'
                            '</li>'] .join (''));
                    }
                });

                $ menu.find ('li'). clique em (função () {
                    var type = $ (this) .data ('type'),
                        doExport = function () {
                            que. $ el.tableExport ($. extend ({}, that.options.exportOptions, {
                                tipo: tipo,
                                escape: false
                            }));
                        };

                    if (that.options.exportDataType === 'all' e& that.options.pagination) {
                        $ el.one ('load-success.bs.table page-change.bs.table', function () {
                            doExport ();
                            that.togglePagination ();
                        });
                        that.togglePagination ();
                    } else if (that.options.exportDataType === 'selected') {
                        var data = that.getData (),
                            selectedData = that.getAllSelections ();

                        that.load (selectedData);
                        doExport ();
                        that.load (dados);
                    } outro {
                        doExport ();
                    }
                });
            }
        }
    };
}) (jQuery);