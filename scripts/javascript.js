
function toggleSound() {
    var elements = document.getElementsByTagName('audio');
    for(var e = 0; e < elements.length; e++) {
        elements[e].muted = !elements[e].muted;
    }
}

var img_array = ['images/volumeOn.png', 'images/volumeOff.png'];
var i = 0;
function changeMuteIcon() {
    i = (i + 1) % img_array.length;
    document.getElementById("volumeIcon").src = img_array[i];
}
const text = document.querySelector('.wavy');
text.innerHTML = text.textContent.replace(/\S/g, "<span class=spanwavy>$&</span>")

const text2 = document.querySelector('.introducing');
text2.innerHTML = text2.textContent.replace(/\S/g, "<span class=spanintroducing>$&</span>")

const element = document.querySelectorAll('.spanwavy');
for (let i=0; i<element.length; i++) {
    element[i].style.animationDelay=i*0.04 + 's';
}
