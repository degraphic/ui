/*
Copyright 2010 University of Toronto

Licensed under the Educational Community License (ECL), Version 2.0. 
You may not use this file except in compliance with this License.

You may obtain a copy of the ECL 2.0 License at
https://source.collectionspace.org/collection-space/LICENSE.txt
*/

/*global jQuery, window, cspace*/
"use strict";

cspace = cspace || {};

(function ($) {
    fluid.log("roleSetup.js loaded");

    cspace.roleSetup = function (options) {
        
        options = options || {};
                
        options.fetchConfigCallback = options.fetchConfigCallback || function (config) {
            config.depOpts.role.options.roleListEditor.options.dataContext.options.dataSource.options.sources.permission.merge = cspace.dataSource.mergePermissions;
            if (cspace.util.useLocalData()) {
                config.depOpts.role.options.recordType = "role/records/list.json";
                config.depOpts.role.options.roleListEditor.options.baseUrl = "data/";
                config.depOpts.role.options.roleListEditor.options.dataContext.options.baseUrl = "data/";
                config.depOpts.role.options.roleListEditor.options.dataContext.options.fileExtension = ".json";
                config.depOpts.role.options.roleListEditor.options.dataContext.options.dataSource.options.sources.permission.href = "data/permission/list.json";
            }
        };        
        return cspace.pageSetup(options);
        
    };
})(jQuery);