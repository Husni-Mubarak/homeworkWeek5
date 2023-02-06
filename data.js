//Buat class untuk pendaftar
class Pendaftar {
  constructor(nama, umur, uang) {
    this.nama = nama;
    this.umur = umur;
    this.uang = uang;
  }
}
//Tampung data pendaftar kedalam Array dataUser
let dataUser = [];
function getDataInput() {
  let nama_input = document.getElementById("nama").value;
  let umur_input = document.getElementById("umur").value;
  let uang_input = document.getElementById("uang").value;
  let pendaftar = new Pendaftar(nama_input, parseInt(umur_input), parseInt(uang_input));

  //Logika untuk kriteria pendaftar
  document.querySelector("#namaError").innerHTML = "";
  document.querySelector("#umurError").innerHTML = "";
  document.querySelector("#uangError").innerHTML = "";

  if (nama_input.length < 10) {
    document.querySelector("#namaError").innerHTML = "Nama minimal 10 Karakter";
    return;
  }
  if (umur_input < 25) {
    document.querySelector("#umurError").innerHTML = "Umur minimal 25 Tahun";
    return;
  }
  if (uang_input < 100) {
    document.querySelector("#uangError").innerHTML = "Uang minimal 100K";
    return;
  }

  dataUser.push(pendaftar);
  inputTable(dataUser);
  console.log(dataUser);

  //Looping untuk menampung data Umur dan Uang Pendaftar
  let dataUmur = [];
  let dataUang = [];
  for (let i = 0; i < dataUser.length; i++) {
    dataUmur.push(dataUser[i].umur);
    dataUang.push(dataUser[i].uang);
  }
  //Looping untuk menghitung total Umur dan Uang Pendaftar
  let totalUmur = 0;
  let totalUang = 0;
  for (let i = 0; i < dataUser.length; i++) {
    totalUmur += dataUmur[i];
    totalUang += dataUang[i];
  }

  let avgUmur = totalUmur / dataUser.length;
  let avgUang = totalUang / dataUser.length;
  console.log("Rata-rata Umur Pendaftar");
  console.log(avgUmur);
  console.log("Rata-rata Uang Pendaftar");
  console.log(avgUang);

  document.getElementById("avgUmur").value = avgUmur;
  document.getElementById("avgUang").value = avgUang;
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
