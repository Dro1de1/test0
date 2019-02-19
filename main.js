var toggleDebug = (n) => {
    if (n=="off") {
        document.getElementsByClassName("wrapper")[0].id="";
    }
    else if (n=="on") {
        document.getElementsByClassName("wrapper")[0].id="debug";
    }
    document.getElementsByClassName("sidebar")[0].children[0].innerHTML="Debug is "+n;
    switch (n) {case "off": n="on";break;case "on": n="off"};
    document.getElementsByClassName("sidebar")[0].children[0].attributes.onclick.nodeValue="toggleDebug('"+n+"')";
}
var DebugRotation="100", DebugTranslateX="700", DebugTranslateY="0", DebugTranslateZ="-300", DebugPerspective="300";
var toggleRotate = (n) => {
    var Value = document.getElementById(n).value;
    DebugRotation=Value/10;
    document.getElementsByTagName("style")[0].innerHTML= '#debug .group {transform: translate3d('+DebugTranslateX+'px,'+DebugTranslateY+'px,'+DebugTranslateZ+'px) rotateY('+DebugRotation+'deg);}'
}
var toggleTranslate = (n) => {
    var Value = document.getElementById(n).value;
    switch (n) {
        case "sliderTranslateX": DebugTranslateX=Value;break;
        case "sliderTranslateY": DebugTranslateY=Value;break;
        case "sliderTranslateZ": DebugTranslateZ=Value;
    };
    document.getElementsByTagName("style")[0].innerHTML= '#debug .group {transform: translate3d('+DebugTranslateX+'px,'+DebugTranslateY+'px,'+DebugTranslateZ+'px) rotateY('+DebugRotation+'deg);}'
}
var togglePerspective = (n) => {
    var Value = document.getElementById(n).value;
    DebugPerspective = Value;
    document.getElementsByTagName("style")[1].innerHTML= ".wrappper {perspective:"+DebugPerspective+"px}";
}