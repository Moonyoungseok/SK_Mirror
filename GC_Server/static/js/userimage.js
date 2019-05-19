var username = document.getElementById('usernametxt');
// get JSON with using pure javascript
var request= new XMLHttpRequest();

var url= "http://us-central1-backup-c8eab.cloudfunctions.net/app/images?username="+username;
request.open("GET", url, params);
request.responseType='json';
request.send();

request.onload = function() {
    var images = request.response;
    makeImageview(images);
}

function makeImageview(jsonObj) {
    var loadimages = jsonObj;
    var container = document.getElementById('images');
    for (var i = 0; i < Object.keys(loadimages).length; i++) {
        var imgbox = document.createElement('img');
        var keys = Object.keys(loadimages);
        var url = loadimages[keys[i]].img_file;
        console.log(keys[i]);
        imgbox.src = url;
        imgbox.style.margin='10px';
        imgbox.style.height = '200px';
        imgbox.style.width = '200px';
        imgbox.style.display = 'inline-block';
        imgbox.name=keys[i];
        //imgbox.onclick=function() {sendData(this.name)};
        imgbox.onclick=function() {alert('준비중입니다.')};
        container.appendChild(imgbox);
    }
}
function sendData(imgName){
    var select = document.getElementById('selectImage');
    select.value=imgName;
    console.log(imgName);
    var form = document.getElementById('imageradio');
    form.submit();
}