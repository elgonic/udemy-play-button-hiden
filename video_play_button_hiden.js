//window.addEventListener('load', main, true);
const jsInitCheckTimer=setInterval(jsLoaded,1000);
function jsLoaded(){
    if(document.querySelector("[class^='video-player--center']") != null){
        $('div[class*="video-player--center-"]').hide();
        console.log("Hide play button")
    }
}