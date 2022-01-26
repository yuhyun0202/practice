// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //  해당 함수의 이름은 youtube를 제어 해주는 js Library가 찾는 것이므로 바꾸면 x
  new YT.Player('player', {
    videoId: 'b8LIvFxdcGE',   //  최초 재생할 영상 ID 삽입 - 영상 url의 마지막 영역 'v=' 이후를 복사 
    playerVars: {
      autoplay: true,   //  자동 재상 여부 
      loop: true,   //  반복 재생 여부 
      playlist: 'SOoYi9Ob2OE'   //  반복 재생할 영상 ID 목록 
    },
    events: {
      onReady: function (event) {
          event.target.mute()   //  음소거
      }
    }
  });
}