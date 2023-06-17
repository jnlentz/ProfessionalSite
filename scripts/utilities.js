function getTS() {
    val = document.getElementById('convertButton').value
    date = Date(val)
    document.getElementById('dateDisplay').innerHTML = date
    console.log(date)
}