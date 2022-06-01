/* 
///////////////////////////////////////////////////////////////////////////////
//   
// Title:            COMP229
// Semester:         Summer 2022
// Author:           Chan Po Fai
// Email:            cpofai@my.centennialcollege.ca
// StudentID:        301220725
// Date:             01-June-2022
///////////////////////////////////////////////////////////////////////////////
*/

"use strict";
(function () {
    function Start() {
        console.log("App Started!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function () {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("===========");
                console.log(XHR.responseText);
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map