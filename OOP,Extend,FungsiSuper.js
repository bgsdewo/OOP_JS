//Penjelasan Oop, Extend Dan Fungsi Super
class Peliharaan {
  // parent class/object
  constructor(name, age) {
    console.log("parent executed");
    this.name = name;
    this.age = age;
  }
  makan() {
    return `${this.name} lagi makan`;
  }
}

class Kucing extends Peliharaan {
  // child class/object
  constructor(name, age, lives) {
    console.log("child executed");
    super(name, age);
    this.lives = lives;
  }
  meong() {
    return "Meeonng!";
  }
}

class Anjing extends Peliharaan {
  // child class/object
  gongong() {
    return "guk guk!!";
  }
}
//membuat objek ,menggunakan keyword untuk manggil objek
const kucing = new Kucing("Oniee", 12);
console.log(kucing.makan());
console.log(kucing.meong());

const anjing = new Anjing("Shiba", 12);
console.log(anjing.makan());
console.log(anjing.gongong());
