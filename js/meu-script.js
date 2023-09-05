// Espera o DOM carregar
$(function() {

    // Seleciona botão
    const btn = $('#jogar');
    
    // Ao clicar no botão
    btn.click(function() {
  
      // Insere elemento
      $('#editor').html('<textarea id="code"></textarea>');
      
      // Inicializa editor
      const editor = CodeMirror.fromTextArea(
        document.getElementById('code'),
        {
          // opções do editor
        }
      );
  
    });
  
  });