import React, { useState, useEffect } from 'react';
import GroceryList from './GroceryList';
import AddItem from './AddItem';
import SearchBar from './SearchBar';
import './styles.css';

const App = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('groceryItems')) || [];
        setItems(storedItems);
    }, []);

    const addItem = (item) => {
        const newItems = [...items, item];
        setItems(newItems);
        localStorage.setItem('groceryItems', JSON.stringify(newItems));
    };

    const deleteItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
        localStorage.setItem('groceryItems', JSON.stringify(newItems));
    };

    const editItem = (updatedItem) => {
        const newItems = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
        setItems(newItems);
        localStorage.setItem('groceryItems', JSON.stringify(newItems));
    };

    return (
        <div>
            <h1>Grocery List</h1>
            <AddItem addItem={addItem} />
            <SearchBar setSearchQuery={setSearchQuery} />
            <GroceryList items={items} searchQuery={searchQuery} deleteItem={deleteItem} editItem={editItem} />
        </div>
    );
};

export default App;
