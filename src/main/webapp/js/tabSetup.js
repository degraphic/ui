/*
Copyright 2009-2010 University of Toronto

Licensed under the Educational Community License (ECL), Version 2.0. 
You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at
https://source.collectionspace.org/collection-space/LICENSE.txt
*/

/*global jQuery, window, cspace*/
"use strict";

cspace = cspace || {};

(function ($) {

    /**
     * 
     * @param {Object} applier  ChangeApplier for the primary record's data model
     * @param {Object} options
     */
    cspace.tabSetup = function (options) {
        
        options = options || {};
                
        options.fetchConfigCallback = options.fetchConfigCallback || function (config) {
            // configuration options specific to the current context:
            config.depOpts.relatedRecordsTab.options.listEditor.options.data =
                options.model.relations[config.depOpts.relatedRecordsTab.options.related];
            config.pageBuilder.options.primaryRecordType = options.primaryRecordType;
            config.pageBuilder.options.model = options.model;
            config.pageBuilder.options.applier = options.applier;

            // configuration options specific to local-file-system use:
            if (cspace.util.useLocalData()) {
                config.depOpts.relatedRecordsTab.options.listEditor.options.dataContext.options.baseUrl = "data";
                config.depOpts.relatedRecordsTab.options.listEditor.options.dataContext.options.fileExtension = ".json";
            }
            
        };
        return cspace.pageSetup(options);
        
    };
})(jQuery);
