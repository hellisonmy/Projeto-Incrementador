let ValorContador = 0;

function incrimentar() {
  ValorContador += 1;  
  updateCounterDisplay();  
}

function decrementar() {
  if (ValorContador > 0) {
    ValorContador -= 1;  
  }
  updateCounterDisplay();  
}

function limpar() {
  ValorContador = 0;  
  updateCounterDisplay();  
}

function updateCounterDisplay() {
  document.getElementById('contador').value = ValorContador; 
}
