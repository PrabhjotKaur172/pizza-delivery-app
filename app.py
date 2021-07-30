from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__, static_url_path='', static_folder='dist/pizza-delivery-app')
CORS(app)

ENV = 'prod'

if ENV == 'dev':
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = ''
else:
    app.debug = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://qvslight:znhSrkRIN5P0bNHOOad7MXkGPuw-p1KP@tai.db.elephantsql.com/qvslight'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class useradmintable(db.Model):
    __tablename__ = 'useradmintable'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String,unique=True)
    username = db.Column(db.String)
    password = db.Column(db.String)

    def __init__(self,email,username,password):
        self.email = email
        self.username = username
        self.password = password
    def to_json(self):
        return {
            'email': self.email,
            'username': self.username
        }

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        emailid = request.json['email'],
        uname = request.json['username']
        passw = request.json['password']

        if emailid == '' or uname == '' or passw == '':
            return jsonify('Please enter required fields')
        else:
            data = useradmintable(email=emailid,username=uname,password=passw)
            db.session.add(data)
            db.session.commit()
            return jsonify('You have registered successfully.')

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        emailid = request.json['email'],
        passw = request.json['password']

        if emailid == '' or passw == '':
            return jsonify('Please enter required fields')
        else:
            user = useradmintable.query.filter_by(email=emailid,password=passw).first()
            if user:
                return user.to_json()
            return jsonify('User not found')


@app.route('/<path:path>')
def static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(path)
if __name__ == '__main__':
    app.run()
