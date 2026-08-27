// Seleciona o botão e a descrição no HTML usando suas classes
const botao = document.querySelector('.botao-interativo');
const descricao = document.querySelector('.descricao');

// Adiciona um evento de clique no botão
botao.addEventListener('click', () => {
  // Exibe uma mensagem na tela
  alert('Obrigado por visitar o site da nossa dupla!');
  
  // Altera o texto da descrição ao clicar
  descricao.textContent = 'Você clicou no botão! Agora você faz parte do nosso universo dos games.';
  descricao.style.color = '#38bdf8'; // Muda a cor do texto
  
});