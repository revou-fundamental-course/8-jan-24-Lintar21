function calculate() {
    // mengambil nilai panjang sisi dari input
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    // ngitung luas dan keliling persegi
    var area = sideLength * sideLength;
    var perimeter = 4 * sideLength;

    // Tampilan hasil di dalam elemen dengan ID result
    document.getElementById('areaResult').innerText = area;
    document.getElementById('perimeterResult').innerText = perimeter;
}