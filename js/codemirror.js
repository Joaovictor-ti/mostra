<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js"></script>
// codemirror.js
// Certifique-se de incluir o CodeMirror neste arquivo, seja baixando-o localmente ou usando um CDN.

// Importe os estilos do CodeMirror
import 'codemirror/lib/codemirror.css';

// Importe o modo Python do CodeMirror
import 'codemirror/mode/python/python';

// Importe o CodeMirror
import CodeMirror from 'codemirror';

// Elemento onde o editor será criado
const codeEditor = document.getElementById('code-editor');

// Configuração do CodeMirror
const editor = CodeMirror(codeEditor, {
    mode: 'python',
    theme: 'default', // Você pode escolher um tema
    lineNumbers: true, // Exibe números de linha
    autofocus: true, // Foca automaticamente no editor
    tabSize: 4, // Tamanho da tabulação
});

// Exemplo de código inicial
const initialCode = `def hello():
    print("Olá, mundo!")

hello()
`;

// Defina o código inicial no editor
editor.setValue(initialCode);

// Evento de clique no botão Executar
const runButton = document.getElementById('run-button');
runButton.addEventListener('click', () => {
    const userCode = editor.getValue();
    
    // Execute o código do usuário aqui (você precisará implementar essa parte)
    // Por exemplo, você pode usar o JavaScript para enviar o código Python para um servidor e obter o resultado.
    // Em seguida, exiba o resultado na interface do usuário.
});
