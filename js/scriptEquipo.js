//CONTADOR

const infoP = document.querySelector(".info__p");


let contador = 1;
let limite = 50;

const elementoObservado = document.querySelector(".info__p");

const observerInfo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (contador == 51) {
                
            }
            else {
                let intervalo = setInterval(() => {
                    infoP.textContent = `+ ${contador}`;
                    contador++;
                  
                    if (contador > 50) {
                      clearInterval(intervalo);
                    }
                  }, 50);
            }
            
        }
    })
});

observerInfo.observe(elementoObservado);