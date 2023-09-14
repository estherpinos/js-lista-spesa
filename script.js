
// 1.Creare un array con la lista della spesa.

const listaSpesa =['melone', 'patate', 'arance', 'latte', 'acqua', 'uova'];

// 2.Inizializare variabile ciclo while.

let conta=0;

// 3.Condizione del ciclo while.

while (conta<listaSpesa.length) {
  element=listaSpesa[conta];
  document.getElementById('lista').innerHTML+=`<h3> ${element} </h3>`;
  conta++;
}
