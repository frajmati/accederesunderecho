//PANTALLA DE CARGA

const loader = document.querySelector(".loader");
const content = document.querySelector(".content");

// window.addEventListener('load', function () {
//     loader.style.display = 'block';
//     setTimeout(() => {
//         loader.style.display = 'none';
//         content.style.display = 'block';
//     }, 1200);
// });


loader.style.display = 'none';
content.style.display = 'block';

const imgParallax = document.querySelector(".parallax__img");

new simpleParallax(imgParallax, {scale: 5});


const cardFacultad = document.querySelector(".card__btn--facultad");
const cardZapata = document.querySelector(".card__btn--zapata");
const cardDelMazo = document.querySelector(".card__btn--delMazo");
const cardThadi = document.querySelector(".card__btn--thadi");


const estudiantesUl = document.querySelector(".estudiantes__ul");
const cardEstudiantes = document.querySelector(".estudiantes");
const cruz = document.querySelector(".icon__cruz");
const layout = document.querySelector(".layout");
const body = document.body;

let facultadIntegrantes = ["Adriana Moreno (Secretaria de Extensión FED)","Viviana Andrea Leo (Directora del proyecto)","Alejandro Omar Guerra", "Carlos Omar Arancibia","Fernanda Ozollo","Javier Osimani"];

let zapataIntegrantes = ["Matías Oliva (Estudiante - Redes sociales)","Josefina Ravotti (Estudiante - Redes sociales)","Juan Manuel Frajberg (Estudiante - Diseño)", "Matías Frajberg (Estudiante - Programador)","Cristina Iriarte (Docente coordinadora)","Cristian Gamba (Director)"];

let delMazoIntegrantes = [
    'Aguilera Gastón (Estudiante)',
    'Lucas Romero (Estudiante)',
    'Gramajo Mauro (Estudiante)',
    'Miranda Alejo (Estudiante)',
    'Luciano Vallone (Estudiante)',
    'Ismael Póquet (Estudiante)',
    'Lautaro Arancibia (Estudiante)',
    'Gabriel Olivares (Docente)',
    'Pablo Leiva (Docente)',
    'Carlos Esteban (Docente)',
    'Lucía Zárate (Directora)'
];
  

let thadiIntegrantes = [
    'Marina Vidal (Docente)',
    'Sonia Viviana Parlanti (Directora)',
    'Cristina Da Lozzo (Docente)',
    'Cintia Comella (Docente)',
    'Mariela Climiño (Directora)',
  ];
  

cardFacultad.addEventListener("click", () => {
    body.style.overflow = "hidden";
    layout.classList.toggle("active");
    
    estudiantesUl.textContent = "";
    for (let i = 0; i < facultadIntegrantes.length;i++) {
        let li = document.createElement("li");
        li.classList.add("estudiantes__li");
        li.textContent = `${facultadIntegrantes[i]}`;
        estudiantesUl.appendChild(li);
    }
})

cardZapata.addEventListener("click", () => {
    body.style.overflow = "hidden";
    layout.classList.toggle("active");
    
    estudiantesUl.textContent = "";
    for (let i = 0; i < zapataIntegrantes.length;i++) {
        let li = document.createElement("li");
        li.classList.add("estudiantes__li");
        li.textContent = `${zapataIntegrantes[i]}`;
        estudiantesUl.appendChild(li);
    }
})

cardDelMazo.addEventListener("click", () => {
    body.style.overflow = "hidden";
    layout.classList.toggle("active");
    
    estudiantesUl.textContent = "";
    for (let i = 0; i < delMazoIntegrantes.length;i++) {
        let li = document.createElement("li");
        li.classList.add("estudiantes__li");
        li.textContent = `${delMazoIntegrantes[i]}`;
        estudiantesUl.appendChild(li);
    }
})

cardThadi.addEventListener("click", () => {
    body.style.overflow = "hidden";
    layout.classList.toggle("active");
    
    estudiantesUl.textContent = "";
    for (let i = 0; i < thadiIntegrantes.length;i++) {
        let li = document.createElement("li");
        li.classList.add("estudiantes__li");
        li.textContent = `${thadiIntegrantes[i]}`;
        estudiantesUl.appendChild(li);
    }
})

cruz.addEventListener("click", () => {
    
    layout.classList.remove("active");
    body.style.overflow = "auto";
    
    setTimeout(() => {
        estudiantesUl.textContent = ""; 
    }, 400);
})


//TECLA ESCAPE

// function handleKeyPress(event) {
//     if (event.keyCode === 27) {
//       layout.classList.remove("active");
//         body.style.overflow = "auto";
    
//     setTimeout(() => {
//         estudiantesUl.textContent = ""; 
//     }, 400);
//     }
//   }

// document.addEventListener('keydown', handleKeyPress);








