from flask import Flask
from flask_cors import CORS
from config import config

# Create the Flask application
app = Flask(__name__)

# Set the database URI from the config file
app.config['SQLALCHEMY_DATABASE_URI'] = config['SQLALCHEMY_DATABASE_URI']

# Enable CORS (Cross-Origin Resource Sharing)
CORS(app)

# Import and initialize the database
from db import db
db.init_app(app)

# Import the products blueprint
from products import bp as products_bp

# Register the products blueprint under the "/api" prefix
app.register_blueprint(products_bp, url_prefix='/api')

# If the script is executed directly (not imported), run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9001)
