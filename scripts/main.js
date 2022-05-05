/* javascript里的注释符号与css中一样 */
// 也可以更简单地用双斜杠，css中不行
/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
} */

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pluto-uanow.jpg') {
      myImage.setAttribute('src', 'images/pluto-truecolor.jpg');
    } else {
      myImage.setAttribute('src', 'images/pluto-uanow.jpg');
    }
}