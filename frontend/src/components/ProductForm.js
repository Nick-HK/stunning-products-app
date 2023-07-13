import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    Alert,
    Autocomplete,
    Button,
    CardActions,
    CardContent,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import SelectFormData from "../data/formData.json";

export default function ProductForm({ defaultData, submitButtonText, onSubmit, icon, isError }) {
    const [productName, setProductName] = useState('');
    const [productID, setProductID] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productColour, setProductColour] = useState('');
    const [productSize, setProductSize] = useState(0);

    useEffect(() => {
        // Set default form values based on the provided defaultData prop
        Object.keys(defaultData).map((e, i) => {
            switch (e) {
                case 'name':
                    setProductName(defaultData[e]);
                    break;
                case 'ID':
                    setProductID(defaultData[e]);
                    break;
                case 'description':
                    setProductDesc(defaultData[e]);
                    break;
                case 'colour':
                    setProductColour(defaultData[e]);
                    break;
                case 'size':
                    setProductSize(defaultData[e]);
                    break;
                default:
                    break;
            }
        });
    }, [defaultData]);

    const submitForm = () => {
        // Prepare the form data for submission
        let submitData = {
            'name': productName,
            'ID': parseInt(productID),
            'description': productDesc,
            'colour': productColour,
            'size': productSize
        }
        onSubmit(submitData);
    }

    return (
        <>
            {/* Card Content */}
            <CardContent sx={{ flex: '1 0 auto' }}>
                {/* Form */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <div>
                        {/* Product Name */}
                        <TextField
                            id="name"
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            value={productName}
                            onChange={(event) => {
                                setProductName(event.target.value)
                            }}>
                        </TextField>
                    </div>
                    <div>
                        {/* Product ID */}
                        <TextField
                            id="id"
                            label="Product ID"
                            variant="outlined"
                            fullWidth
                            value={productID}
                            onChange={(event) => {
                                const regex = /^[0-9\b]+$/;
                                if (event.target.value === "" || regex.test(event.target.value)) {
                                    setProductID(event.target.value)
                                }
                            }}>
                        </TextField>
                    </div>
                    <div>
                        {/* Product Description */}
                        <TextField
                            id="description"
                            label="Product Description"
                            variant="outlined"
                            multiline
                            fullWidth
                            value={productDesc}
                            onChange={(event) => {
                                setProductDesc(event.target.value)
                            }}>
                        </TextField>
                    </div>
                    <div>
                        {/* Product Colour */}
                        <Autocomplete
                            id="colour"
                            freeSolo
                            value={productColour}
                            options={SelectFormData.colour.map((option) => option.value)}
                            onInputChange={(event, newValue) => {
                                setProductColour(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} label="Product Colour" />}
                        />
                    </div>
                    <div>
                        {/* Product Size */}
                        <FormControl fullWidth>
                            <InputLabel id="label-product-size">Product Size</InputLabel>
                            <Select
                                labelId="label-product-size"
                                id="size"
                                value={productSize}
                                label="Size"
                                onChange={(event) => {
                                    setProductSize(event.target.value)
                                }}
                            >
                                {/* Generate menu items for size options */}
                                {SelectFormData.size.map(e => {
                                    return (
                                        <MenuItem value={e.value} key={e.value}>
                                            {e.size}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </div>
                </Box>
            </CardContent>
            {/* Card Actions */}
            <CardActions style={{ alignSelf: 'center' }}>
                {/* Submit Button */}
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={icon} onClick={submitForm}>
                        {submitButtonText}
                    </Button>
                </Stack>
                {/* Display error message if isError is true */}
                {isError ?
                    <Alert severity="error">Incorrect data, please update and try again!</Alert>
                    :
                    <></>
                }
            </CardActions>
        </>
    );
}
