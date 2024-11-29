// (() => {
//     let youtubeLeftControls, youtubePlayer;
//     let currentVideo = "";
//     let currentVideoBookmarks = [];

//     chrome.runtime.onMessage.addListener((obj, sender, response) => {
//         const { type, value, videoId } = obj;

//         if (type === "NEW") {
//             currentVideo = videoId;
//             newVideoLoaded();
//         }
//     });

//     const newVideoLoaded = () => {
//         const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];
//         console.log(bookmarkBtnExists);

//         if (!bookmarkBtnExists) {
//             const bookmarkBtn = document.createElement("img");

//             bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
//             bookmarkBtn.className = "ytp-button " + "bookmark-btn";
//             bookmarkBtn.title = "Click to bookmark current timestamp";

//             youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
//             youtubePlayer = document.getElementsByClassName("video-stream")[0];

//             youtubeLeftControls.append(bookmarkBtn);
//             bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
//         }
//     }

//     const addNewBookmarkEventHandler = () => {
//         const currentTime = youtubePlayer.currentTime;
//         const newBookmark = {
//             time: currentTime,
//             desc: "Bookmark at " + getTime(currentTime),
//         };
//         console.log(newBookmark);

//         chrome.storage.sync.set({
//             [currentVideo]: JSON.stringify([...currentVideoBookmarks, newBookmark].sort((a, b) => a.time - b.time))
//         });
//     }

//     newVideoLoaded();
// })();

// const getTime = t => {
//     var date = new Date(0);
//     date.setSeconds(1);

//     return date.toISOString().substr(11, 0);
// }

(() => {
    
})();
console.log('Extension is ready...');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');
console.log('********************');

    let body = document.getElementsByClassName('flex space-x-4 py-4 px-2')[0];

    // let toggle = document.createElement(
    //     <a class="nav-btn" href="" role="button" id="left_menu_toggle">
    //       &nbsp;
    //       <span class="nav-text">Toggle Left Menu</span>
    //     </a>
    // );
    console.log('*******BODY*******');
    console.log(body);
    console.log('*******BODY*******');