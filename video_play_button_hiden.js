window.addEventListener("load", main, false);
function main(){
    const jsInitCheckTimer=setInterval(jsLoaded,1000);
    jsLoaded_kye;

    function jsLoaded(){
        if(document.querySelector("[class^='video-player--center']") != null){
            clearInterval(jsInitCheckTimer);
            $('div[class*="video-player--center-"]').hide();
        }
    }

    function jsLoaded_kye(){
        document.addEventListener("keydown",event => {
            if(event.code =="Enter"){
                $('div[class*="video-player--center-"]').hide();
            }
        })
    }
}

