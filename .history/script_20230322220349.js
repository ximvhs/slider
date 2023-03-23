document.getElementById('right').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').appendChild(lists[0]);
}

// lấy 
document.getElementById('left').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').prepend(lists[lists.length - 1]);
}

