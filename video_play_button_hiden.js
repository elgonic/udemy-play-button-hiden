//window.addEventListener('load', main, true);
const jsInitCheckTimer=setInterval(main,1000);
function main(){
//    const jsInitCheckTimer=setInterval(jsLoaded,1000);
    function jsLoaded(){
        if(document.querySelector("[class^='video-player--center']") != null){
            clearInterval(jsInitCheckTimer);
            $('div[class*="video-player--center-"]').hide();
            //console.log("発火")
        }

    }
}
