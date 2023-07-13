from flask import jsonify, request
from flask_expects_json import expects_json
from models import schema
from models.products import Products
from products import bp
from db import db


@bp.route('/products', methods=['GET'])
def list_products():
    # Retrieve all products from the database
    products = db.session.query(Products).all()
    return jsonify(Products.serialize_list(products))  # Return serialized products as JSON


@bp.route('/product', methods=['POST'])
@expects_json(schema.product_schema)  # Expect JSON data in the request body matching the provided schema
def add_product():
    data = request.json  # Retrieve the JSON data from the request body
    new_product = Products(ID=data['ID'],
                           colour=data['colour'],
                           description=data['description'],
                           name=data['name'],
                           size=data['size'])
    db.session.add(new_product)  # Add the new product to the database session
    db.session.commit()  # Commit the changes to the database
    return 'Inserted', 200


@bp.route('/product/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    # Retrieve a product from the database by its ID
    product = db.session.query(Products).filter(Products.uid == product_id).first_or_404()
    return jsonify(Products.serialize(product))  # Return serialized product as JSON


@bp.route('/product/<int:product_id>', methods=['DELETE'])
def delete_product_by_id(product_id):
    # Retrieve and delete a product from the database by its ID
    product = db.session.query(Products).filter(Products.uid == product_id).first_or_404()
    db.session.delete(product)  # Delete the product from the database session
    db.session.commit()  # Commit the changes to the database
    return jsonify('DELETED'), 200


@bp.route('/product/<int:product_id>', methods=['PUT'])
@expects_json(schema.product_schema)  # Expect JSON data in the request body matching the provided schema
def update_product_by_id(product_id):
    data = request.json  # Retrieve the JSON data from the request body
    product = db.session.query(Products).filter(Products.uid == product_id).first_or_404()
    # Update the product attributes with the new data
    product.ID = data['ID']
    product.colour = data['colour']
    product.description = data['description']
    product.name = data['name']
    product.size = data['size']
    db.session.commit()  # Commit the changes to the database
    return jsonify('UPDATED'), 200
