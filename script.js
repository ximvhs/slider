// lắng nghe tiếng click ở nút và thực hiện những tác vụ trong hàm
// cách 1:
document.getElementById('left').onclick = function () {
    // đầu tiên lập list tát cả các class là item
    let lists = document.querySelectorAll('.item');
    // lấy phần tử đầu đầy về cuối danh sách
    document.getElementById('slider').appendChild(lists[0]);
}

// Cách 2:
// let left = document.querySelector('#left');

// left.addEventListener('click', () => {
//     let lists = document.querySelectorAll('.item')
//     document.querySelector('#slider').appendChild(lists[0])
// })

// lắng nghe tiếng click của nút
document.getElementById('right').onclick = function () {
    // lập 1 list item
    let lists = document.querySelectorAll('.item');
    // lấy phần tử cuối đầy về đầu danh sách
    document.getElementById('slider').prepend(lists[lists.length - 1]);
}


