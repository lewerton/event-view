System.register(['./speaker.service', './sort-speakers.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (speaker_service_1_1) {
                exportStar_1(speaker_service_1_1);
            },
            function (sort_speakers_pipe_1_1) {
                exportStar_1(sort_speakers_pipe_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map