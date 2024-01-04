from models import db
from flask_migrate import Migrate
from flask import Flask, request, url_for, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy



app = Flask(__name__)

# make the connection to the DB through SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mf-marketing.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Enter a secret key
app.config["SECRET_KEY"] = "Azula"

# create our migration using our db
migrate = Migrate(app, db)

# initialize the flask app
db.init_app(app)