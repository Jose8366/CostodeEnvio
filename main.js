document.getElementById("calcular").addEventListener("click", function () {
  const producto = document.getElementById("producto").value;
  const peso = document.getElementById("peso").value;
  const distancia = document.getElementById("distancia").value;

  // Perform calculations based on input values
  const costo = calcularCosto(peso, distancia);
  const tiempo = calcularTiempo(peso, distancia);

  // Display the results
  document.getElementById("costo").innerText = `Costo: $${costo}`;
  document.getElementById("tiempo").innerText = `Tiempo: ${tiempo} días`;
});

function calcularCosto(peso, distancia) {
  // Implement your cost calculation logic here
  // For example:
  return peso * distancia * 0.1;
}

function calcularTiempo(peso, distancia) {
  // Implement your time calculation logic here
  // For example:
  return Math.ceil(peso / distancia / 100);
}
