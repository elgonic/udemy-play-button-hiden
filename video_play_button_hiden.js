// setTimeout x秒後に処理
// 複数回同時に走った場合、一杯いっぱいなので、こちらに
const timer = setTimeout(getProperty, 1000);
function getProperty() {
    // 対象要素要件等
    target = document.getElementsByClassName("curriculum-item-view--content--3ABmp")
    // curriculum-item-view--video-background--lcepY 
    // curriculum-item-view--absolute-height-limiter--1SMqE
    // vjs-tech
    // clearInterval(timer);

    // 要件等
    observer.observe(target[0], {
        attributes: true,
        attributeOldValue: false,
        characterData: false,
        characterDataOldValue: false,
        childList: false,
        subtree: false
    });
}

// 変更検知したら処理
const observer = new MutationObserver(function (mutations) {
    // console.log(mutations);
    // console.log("test");
    console.log("検知");
    // timer2 = setInterval(hiddenButton, 2000);
    timer2 = setTimeout(hiddenButton, 1000);
});

// ボタンを隠す処理1
function hiddenButton() {
    // clearInterval(timer2);
    if(document.querySelector("[class^='video-player--center']") != null){
        $('div[class*="video-player--center-"]').hide();
            console.log("発火")
    }
}