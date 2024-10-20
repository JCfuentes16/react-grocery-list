import React from 'react';
import Item from './Item';

const GroceryList = ({ items, searchQuery, deleteItem, editItem }) => {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.map(item => (
                <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />
            ))}
        </ul>
    );
};

export default GroceryList;
