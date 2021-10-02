"use strict";
var $menus = document.querySelectorAll('.menu');
var $modal = document.querySelector('.modal');
var $modalCloseBtn = document.querySelector('.modal_close');
$menus.forEach(function (menu) {
    menu.addEventListener('click', function () {
        $modal.style.display = 'block';
    });
});
$modalCloseBtn.addEventListener('click', function () {
    $modal.style.display = 'none';
});
//# sourceMappingURL=main.js.map