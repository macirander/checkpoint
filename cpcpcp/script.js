const salarios = [1500, 2200, 1800, 2500, 1900, 2100, 1700, 3000, 1600, 2800];

function calcularAumento(salario) {
  if (salario <= 2000) {
    return salario * 1.15; 
  } else {
    return salario * 1.10; 
  }
}

const novosSalarios = salarios.map(calcularAumento);

document.getElementById("salariosBase").textContent = salarios.join(", ");
document.getElementById("novosSalarios").textContent = novosSalarios.join(", ");

const salariosAcima2500 = novosSalarios.filter(salario => salario > 2500);

document.getElementById("salariosAcima2500").textContent = salariosAcima2500.join(", ");

const somaSalariosAcima2500 = salariosAcima2500.reduce((acumulador, salario) => acumulador + salario, 0);

document.getElementById("somaSalariosAcima2500").textContent = somaSalariosAcima2500;