import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name,
            price,
            image,
        };
        addItem(newItem);
        setName('');
        setPrice('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" required />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
            <input type="file" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItem;
