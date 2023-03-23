// lắng nghe tiếng click ở nút và thực hiện những tác vụ trong hàm
document.getElementById('left').onclick = function() {
    
    let lists = document.querySelectorAll('.item');

    document.getElementById('slider').appendChild(lists[0]);
}

// lắng nghe tiếng click của nút
document.getElementById('right').onclick = function() {
    // lập 1 list item
    let lists = document.querySelectorAll('.item');
    document.getElementById('slider').prepend(lists[lists.length - 1]);
}


