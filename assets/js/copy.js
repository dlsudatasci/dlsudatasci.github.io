function copyText(id) {
    var text = document.getElementById(id);

    console.log(text);
    text.select();
    text.setSelectionRange(0, 99999);

    document.execCommand("copy");
}