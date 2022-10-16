document.getElementById('right').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slider').appendChild(list[0]);
}
document.getElementById('left').onclick = function() {
    let list = document.querySelectorAll('.item');
    document.getElementById('slider').prepend(list[list.length - 1]);
}