product_schema = {
    "type": "object",
    "properties": {
        "ID": {"type": "number"},
        "colour": {"type": "string"},
        "description": {"type": "string"},
        "name": {"type": "string"},
        "size": {
            "type": "number",
            "minimum": 1,
            "maximum": 3
        }
    },
    "required": ["ID", "colour", "description", "name", "size"]
}
