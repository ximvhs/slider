document.getElementById('right').onclick = function() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').appendChild(lists[0]);
}

// năng nghe tiếng click của nút
document.getElementById('left').onclick = function() {
    // lập 1 list item
    let lists = document.querySelectorAll('.item');

    document.getElementById('slider').prepend(lists[lists.length - 1]);
    console.log(list.length)
}


