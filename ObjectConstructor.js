// Membuat Object Dengan Constructor Function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new -> baca lebih lanjut
//dalam membuat constructor function styling textnya diawali huruf besar
//dalam membuat objek membuat suatu mehtod letakan di prototype
//membuat constructor
// function Color(r,g,b) {
//    this.r = r;
//    this.g = g;
//    this.b = b;
// }
// Color.prototype.rgb = function () {
//    const {r,g,b} = this
//    return `rgb(${r}, ${g}, ${b})`
// }
// Color.prototype.hex = function() {
//  const { r, g, b} = this
//        return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
//       }
//       Color.prototype.rgba = function (a = 1.0) {
//          const {r,g,b} = this
//          return `rgba(${r}, ${g}, ${b}, ${a})`
//       }
//       document.body.style.backgroundColor = new Color(192,200,20).rgba()
