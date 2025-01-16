// Membuat Object Dengan Class
//artinya ketika membuat objek color menggunakan class
//constructor  didalam sebuah kelas adalah sebuah fungsi yg pertma kali akan dijalankan pada saat membuat instance objek
//kaya keyword new tadi
// class Color {
//     constructor(r,g,b,name) {
//        this.r = r
//        this.g = g
//        this.b = b
//        this.name = name;
//       }
//       //yg disebelah kiri adalah milik dari objek color dan sebelah kanan nilai yang didapatkan dari constructor(r,g,b) ketika di call
//       //method adalah sama kaya fungsi tapi kalo fungsi itu terletak dalam sebuah objek maka dia dssebut method
//       innerRGB() {
//          const {r,g,b} = this
//          return `${r}, ${g}, ${b}`
//       }
//       ColorName() {
//          console.log('The color name is' + this.name)
//       }
//       rgb() {

//          return `rgb(${this.innerRGB()})`
//       }
//       rgba(a = 1.0) {

//          return `rgba(${this.innerRGB()}, ${a})`
//       }
//       hex() {

//          return '#' + ((1 << 24) + (r <<16) + (g<<8) +b).toString(16).slice(1)
//       }
//       }
//      const skyColor =  new Color(185,243,252, 'brown')
//      document.body.style.backgroundColor = skyColor.rgb()
//   document.body.style.backgroundColor = skyColor.rgba(0.1)
//   document.body.style.backgroundColor = skyColor.hex() //versi hexadecimal
// document.body.style.backgroundColor = skyColor.name
