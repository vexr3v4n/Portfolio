function updateTime() {
    var date = new Date();
    var stunden = date.getHours();
    var minuten = date.getMinutes();
    var tag = date.getDate();
    var monatDesJahres = date.getMonth();
    var jahr = date.getFullYear();
    var tagInWoche = date.getDay();
    var wochentag = new Array("Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monat = new Array("Jan", "Feb", "M&auml;rz", "Apr", "Mai", "Juni", "Jul", "Aug", "Sept", "Okt", "Nov", "Dez");
    var datum = wochentag[tagInWoche];
    document.getElementById('time').innerHTML = datum;
    setTimeout(updateTime, 60000);
}
window.addEventListener("load", updateTime);