function cdtiente() {
    let dauvao = parseFloat(document.getElementById('a0').value);
    let from = parseFloat(document.getElementById('from').value);
    let to = parseFloat(document.getElementById('to').value);
    let ketqua;
    ketqua = dauvao * to / from;
    document.getElementById('ketqua').value = ketqua;
}
