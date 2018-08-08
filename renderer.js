/*jshint esversion: 6*/
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {remote} = requrie('electron');
document.write("Hello");
require('child_process').exec("C:\\VVR_BUILD\\load.exe");
alert("Hello");
