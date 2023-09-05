# app.py (Python Flask)

from flask import Flask, request, render_template, jsonify
import subprocess
import tempfile
import os

app = Flask(__name__, template_folder='templates')  # Defina o diretório de modelos como 'templates'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/executar', methods=['POST'])
def executar_codigo():
    codigo = request.form['codigo']
    
    try:
        # Crie um arquivo temporário para armazenar o código Python
        with tempfile.NamedTemporaryFile(delete=False, suffix=".py") as arquivo_temporario:
            nome_arquivo = arquivo_temporario.name
            arquivo_temporario.write(codigo.encode('utf-8'))

        # Execute o código Python a partir do arquivo temporário
        resultado = subprocess.check_output(['python', nome_arquivo], stderr=subprocess.STDOUT, text=True)

        return jsonify({'resultado': resultado, 'erro': None})
    except subprocess.CalledProcessError as e:
        return jsonify({'resultado': None, 'erro': e.output})
    finally:
        # Limpe o arquivo temporário
        os.remove(nome_arquivo)

if __name__ == '__main__':
    app.run(debug=True)

