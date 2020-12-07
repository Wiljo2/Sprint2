from flask import Flask, render_template
import yagmail as yagmail
from flask import Flask, render_template, request
from utils import isEmailValid, isUsernameValid, isPasswordValid

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('login.html', nombre='Sebastian')

@app.route('/procesar',methods=['POST'])
def procesar():
    if request.method == 'POST':
        usuario = request.form['usuario']
        email = request.form['email']
        yag = yagmail.SMTP('proyectosprint3@gmail.com', 'qwaszx013654')
        yag.send(to=email, subject='Nueva cuenta', contents='Activar cuenta<a href="www.google.com">clic aqui</a>')
        men = "Ingreso correcto"
        return men



@app.route('/menu')
def menu():
    return render_template('menubo.html')

@app.route('/crear')
def crear():
    return render_template('crear.html')


@app.route('/crearProducto')
def crearProducto():
    return render_template('crearproducto.html')

if __name__ == '__main__':
    app.run()
