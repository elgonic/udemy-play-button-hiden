window.addEventListener("load", main, false);
function main(e){
    const jsInitCheckTimer=setInterval(jsLoaded,1000);
    function jsLoaded(){
        if(document.querySelector('.video-player--center-button--aPLkI') != null){
            clearInterval(jsInitCheckTimer);
            $('div[class*="video-player--center-button-"]').hide();
        }
    }
}

