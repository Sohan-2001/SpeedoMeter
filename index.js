//JSpeedoMeter
var imageAddr1 = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"; 
var downloadSize1 = 3481.6; //bytes
var imageAddr2 = "https://upload.wikimedia.org/wikipedia/commons/6/64/White_Rhino_Image_002.jpg"; 
var downloadSize2 = 1570816; //bytes
var imageAddr3 = "https://upload.wikimedia.org/wikipedia/commons/c/c5/1594_Orbis_Plancius_2%2C12_MB.jpg"; 
var downloadSize3 = 2233466.88; //bytes
var imageAddr4 = "https://upload.wikimedia.org/wikipedia/commons/c/c5/1594_Orbis_Plancius_2%2C12_MB.jpg";
var downloadSize4 = 2222981; //bytes
var imageAddr5 = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bled_Castle_05.jpg";
var downloadSize5 = 7340032; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
    
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join();
        oProgress.innerHTML = actualHTML;
    }
}
var i = 0;
var colors = ['darkred', 'red',];
document.getElementById("progress").style.color='white';
function change() {
    document.body.style.backgroundColor = colors[i];
    i++;
    if(i>=colors.length){
        i=0;  // Reset i to 0 if it exceeds colors length
    }
  }

function InitiateSpeedDetection() {
    ShowProgressMessage("CHECKING");
    setInterval(change,1000);
    window.setTimeout(MeasureConnectionSpeed, 1);
};    

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

// 1st
function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("ERROR");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr1 + cacheBuster;
    
    function showResults() {
        
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize1 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            speedMbps + " MbPS"
        ]);
        MeasureConnectionSpeed1();
    }
}

// 2nd
function MeasureConnectionSpeed1() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("ERROR");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr2 + cacheBuster;
    
    function showResults() {
        
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize2 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            speedMbps + " MbPS"
        ]);
        MeasureConnectionSpeed2();
    }
}
// 3rd
function MeasureConnectionSpeed2() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("ERROR");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr3 + cacheBuster;
    
    function showResults() {
        
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize3 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            speedMbps + " MbPS"
        ]);
        MeasureConnectionSpeed3();
    }
}
// 4th
function MeasureConnectionSpeed3() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("ERROR");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr4 + cacheBuster;
    
    function showResults() {
        
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize4 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            speedMbps + " MbPS"
        ]);
        MeasureConnectionSpeed4();
    }
}
//5th
function MeasureConnectionSpeed4() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("ERROR");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr5 + cacheBuster;
    
    function showResults() {
        colors=['aqua'];
        document.getElementById("progress").style.color='black';
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize5 * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            speedMbps + " MbPS"
        ]);
        
    }
}
