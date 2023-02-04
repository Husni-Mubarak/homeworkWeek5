//Buat class untuk pendaftar
class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}
//Tampung data pendaftar kedalam Array
let dataUser = [];
function getDataInput() {
  let nama_input = document.getElementById("nama").value;
  let umur_input = document.getElementById("umur").value;
  let uang_input = document.getElementById("uang").value;
  let pendaftar = new Pendaftar(nama_input, umur_input, uang_input);
  dataUser.push(pendaftar);
  inputTable(dataUser);
  console.log(dataUser);
}
//Menampilkan data user kedalam tabel
const userInput = document.getElementById("userTable");
function inputTable(dataUser) {
  userInput.innerHTML = "";
  for (let i = 0; i < dataUser.length; i++) {
    let row = userInput.insertRow(i);

    row.insertCell(0).innerHTML = `${i + 1}`;
    row.insertCell(1).innerHTML = `${dataUser[i].nama}`;
    row.insertCell(2).innerHTML = `${dataUser[i].umur}`;
    row.insertCell(3).innerHTML = `${dataUser[i].uang}`;
  }
}
