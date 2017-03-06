// inyector.js// Get the ipcRenderer of electron
const { ipcRenderer } = require('electron');


document.addEventListener("mouseup", () => {
    var chosenWord = window.getSelection().toString();
    ipcRenderer.sendToHost(chosenWord);
});

// Do something according to a request of your mainview
/*ipcRenderer.on('request', function() {
    ipcRenderer.sendToHost(getScripts());
});*/

ipcRenderer.on("alert-something", function(event, data) {
    //alert(data);
});

ipcRenderer.on("change-text-element", function(event, data) {
    // the document references to the document of the <webview>
    document.getElementById(data.id).innerHTML = data.text;
});


function sendClickDetected() {

}
