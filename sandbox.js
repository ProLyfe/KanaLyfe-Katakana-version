
var x = document.getElementById("myAudio"); 
x.play();

let lettre = 
['A', 'I', 'U', 'E', 'O', 
 'KA', 'KI', 'KU', 'KE', 'KO', 
 'SA', 'SHI', 'SU', 'SE', 'SO',
 'TA', 'CHI', 'TSU', 'TE', 'TO',
 'NA', 'NI', 'NU', 'NE','NO',
 'HA', 'HI', 'FU', 'HE', 'HO',
 'MA', 'MI', 'MU', 'ME', 'MO',
 'YA', 'YU', 'YO',
 'RA', 'RI', 'RU', 'RE', 'RO',
 'WA', 'WO',
 'N'
];

 
let random = Math.floor(Math.random() * lettre.length);

let Ordi = lettre[random];

document.getElementById("titre2").innerHTML = Ordi;




document.getElementById("a")
    .addEventListener('click', function (event) {
    console.log("Ca commence");
    });



function VerifA() {
   if(Ordi === 'A') {
    document.getElementById("a").style.color = "green";
    x.play();
    location.reload();
} else {
    document.getElementById("a").style.color = "red";
    
}};

function VerifI() {
    if(Ordi === 'I') {
     document.getElementById("i").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("i").style.color = "red";
     
 }};
 
function VerifU() {
    if(Ordi === 'U') {
     document.getElementById("u").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("u").style.color = "red";
 }};

function VerifE() {
    if(Ordi === 'E') {
     document.getElementById("e").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("e").style.color = "red";
 }};

function VerifO() {
    if(Ordi === 'O') {
     document.getElementById("o").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("o").style.color = "red";
 }};




 function Verifka() {
    if(Ordi === 'KA') {
     document.getElementById("ka").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ka").style.color = "red";
 }};

 function Verifki() {
    if(Ordi === 'KI') {
     document.getElementById("ki").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ki").style.color = "red";
 }};

 function Verifku() {
    if(Ordi === 'KU') {
     document.getElementById("ku").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ku").style.color = "red";
 }};

 function Verifke() {
    if(Ordi === 'KE') {
     document.getElementById("ke").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ke").style.color = "red";
 }};

 function Verifko() {
    if(Ordi === 'KO') {
     document.getElementById("ko").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ko").style.color = "red";
 }};





 function Verifsa() {
    if(Ordi === 'SA') {
     document.getElementById("sa").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("sa").style.color = "red";
 }};

 function Verifshi() {
    if(Ordi === 'SHI') {
     document.getElementById("shi").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("shi").style.color = "red";
 }};

 function Verifsu() {
    if(Ordi === 'SU') {
     document.getElementById("su").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("su").style.color = "red";
 }};

 function Verifse() {
    if(Ordi === 'SE') {
     document.getElementById("se").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("se").style.color = "red";
 }};

 function Verifso() {
    if(Ordi === 'SO') {
     document.getElementById("so").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("so").style.color = "red";
 }};





 function Verifta() {
    if(Ordi === 'TA') {
     document.getElementById("ta").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ta").style.color = "red";
 }};

 function Verifchi() {
    if(Ordi === 'CHI') {
     document.getElementById("chi").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("chi").style.color = "red";
 }};

 function Veriftsu() {
    if(Ordi === 'TSU') {
     document.getElementById("tsu").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("tsu").style.color = "red";
 }};

 function Verifte() {
    if(Ordi === 'TE') {
     document.getElementById("te").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("te").style.color = "red";
 }};

 function Verifto() {
    if(Ordi === 'TO') {
     document.getElementById("to").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("to").style.color = "red";
 }};




 function Verifna() {
    if(Ordi === 'NA') {
     document.getElementById("na").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("na").style.color = "red";
 }};

 function Verifni() {
    if(Ordi === 'NI') {
     document.getElementById("ni").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ni").style.color = "red";
 }};

 function Verifnu() {
    if(Ordi === 'NU') {
     document.getElementById("nu").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("nu").style.color = "red";
 }};

 function Verifne() {
    if(Ordi === 'NE') {
     document.getElementById("ne").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ne").style.color = "red";
 }};

 function Verifno() {
    if(Ordi === 'NO') {
     document.getElementById("no").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("no").style.color = "red";
 }};



 function Verifha() {
    if(Ordi === 'HA') {
     document.getElementById("ha").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ha").style.color = "red";
 }};

 function Verifhi() {
    if(Ordi === 'HI') {
     document.getElementById("hi").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("hi").style.color = "red";
 }};

 function Veriffu() {
    if(Ordi === 'FU') {
     document.getElementById("fu").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("fu").style.color = "red";
 }};

 function Verifhe() {
    if(Ordi === 'HE') {
     document.getElementById("he").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("he").style.color = "red";
 }};

 function Verifho() {
    if(Ordi === 'HO') {
     document.getElementById("ho").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ho").style.color = "red";
 }};




 function Verifma() {
    if(Ordi === 'MA') {
     document.getElementById("ma").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ma").style.color = "red";
 }};

 function Verifmi() {
    if(Ordi === 'MI') {
     document.getElementById("mi").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("mi").style.color = "red";
 }};

 function Verifmu() {
    if(Ordi === 'MU') {
     document.getElementById("mu").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("mu").style.color = "red";
 }};

 function Verifme() {
    if(Ordi === 'ME') {
     document.getElementById("me").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("me").style.color = "red";
 }};

 function Verifmo() {
    if(Ordi === 'MO') {
     document.getElementById("mo").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("mo").style.color = "red";
 }};





 function Verifya() {
    if(Ordi === 'YA') {
     document.getElementById("ya").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ya").style.color = "red";
 }};

 function Verifyu() {
    if(Ordi === 'YU') {
     document.getElementById("yu").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("yu").style.color = "red";
 }};

 function Verifyo() {
    if(Ordi === 'YO') {
     document.getElementById("yo").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("yo").style.color = "red";
 }};






 function Verifra() {
    if(Ordi === 'RA') {
     document.getElementById("ra").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ra").style.color = "red";
 }};

 function Verifri() {
    if(Ordi === 'RI') {
     document.getElementById("ri").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ri").style.color = "red";
 }};

 function Verifru() {
    if(Ordi === 'RU') {
     document.getElementById("ru").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ru").style.color = "red";
 }};

 function Verifre() {
    if(Ordi === 'RE') {
     document.getElementById("re").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("re").style.color = "red";
 }};

 function Verifro() {
    if(Ordi === 'RO') {
     document.getElementById("ro").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("ro").style.color = "red";
 }};




 function Verifwa() {
    if(Ordi === 'WA') {
     document.getElementById("wa").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("wa").style.color = "red";
 }};

 function Verifwo() {
    if(Ordi === 'WO') {
     document.getElementById("wo").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("wo").style.color = "red";
 }};




 
 function Verifn() {
    if(Ordi === 'N') {
     document.getElementById("n").style.color = "green";
     x.play();
     location.reload();
 } else {
     document.getElementById("n").style.color = "red";
 }};


  