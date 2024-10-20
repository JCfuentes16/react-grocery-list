import React from 'react';
import './styles.css'; // Ensure to import your CSS file

const Item = ({ item, deleteItem, editItem }) => {
    return (
        <li className="item-container">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
            </div>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            {/* Add edit functionality as needed */}
        </li>
    );
};

export default Item;
