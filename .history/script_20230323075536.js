document.getElementById('right').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').appendChild(lists[lists.length-1]);
}

// năng nghe tiếng click của nút
document.getElementById('left').onclick = function() {
    // lập 1 list item
    let lists = document.querySelectorAll('.item');

    // console(lists.length);
    document.getElementById('slider').prepend(lists[0]);
}


