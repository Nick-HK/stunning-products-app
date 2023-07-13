from sqlalchemy import inspect
from db import db

class Products(db.Model):
    # Define the table name
    __tablename__ = 'Products'

    # Define the table columns
    uid = db.Column(db.Integer, primary_key=True, unique=True)  # Unique identifier column
    name = db.Column(db.String(65535))  # Name column
    ID = db.Column(db.Integer)  # ID column
    description = db.Column(db.Text)  # Description column
    colour = db.Column(db.String(65535))  # Colour column
    size = db.Column(db.Integer)  # Size column

    def serialize(self):
        # Serialize the instance attributes into a dictionary
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}  # Using SQLAlchemy's inspect() method

    @staticmethod
    def serialize_list(product_list):
        # Serialize a list of Product instances
        return [product.serialize() for product in product_list]  # Call serialize() on each product instance
