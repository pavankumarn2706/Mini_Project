//DOM
var $ = document.querySelector.bind(document);

//APP
var App = {};
App.init = function () {
    //Init
    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object
    }
// trigger input
$("#triggerFile").addEventListener("click", function (evt) {
    evt.preventDefault();
    $("input[type=file]").click();
});
// drop events
$("#drop").ondragleave = function (evt) {
    $("#drop").classList.remove("active");
    evt.preventDefault();
};
$("#drop").ondragover = $("#drop").ondragenter = function (evt) {
    $("#drop").classList.add("active");
    evt.preventDefault();
};
$("#drop").ondrop = function (evt) {
    $("input[type=file]").files = evt.dataTransfer.files;
    $("footer").classList.add("hasFiles");
    $("#drop").classList.remove("active");
    evt.preventDefault();
};

//upload more
$(".importar").addEventListener("click", function () {
    $(".list-files").innerHTML = "";
    $("footer").classList.remove("hasFiles");
    $(".importar").classList.remove("active");
    setTimeout(function () {
        $("#drop").classList.remove("hidden");
    }, 500);
});

// input change
$("input[type=file]").addEventListener("change", handleFileSelect);
}();