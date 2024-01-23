var els = document.getElementsByClassName('yt-simple-endpoint style-scope ytd-playlist-video-renderer');
var show=[];
for(i = 0;i<els.length;i++){
    var el = els[i];
    console.log(el.textContent)
	show.push({"name": el.textContent.trim(), "id": (el.href.split('?v=')[1].split('&list')[0])});
}
console.log(show)