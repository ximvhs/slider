// lắng nghe tiếng click ở nút và thực hiện những tác vụ trong hàm
document.getElementById('left').onclick = function() {
    // đầu tiên lập list tát cả các class là item
    let lists = document.querySelectorAll('.item');
    // lấy phần tử đầu đầy về cuối danh sách
    document.getElementById('slider').appendChild(lists[0]);
}

// lắng nghe tiếng click của nút
document.getElementById('right').onclick = function() {
    // lập 1 list item
    let lists = document.querySelectorAll('.item');
    // lấy phần tử cuối đầy về đầu danh sách
    document.getElementById('slider').prepend(lists[lists.length - 1]);
}

ducument.getElementById('right').onclick = function


