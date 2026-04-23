import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import ItemCard from '../components/ItemCard';
import ItemForm from '../components/ItemForm';
import { Search, PlusCircle } from 'lucide-react';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { user } = useContext(AuthContext);

  const fetchItems = async () => {
    try {
      const endpoint = searchQuery 
        ? `http://localhost:5000/api/items/search?name=${searchQuery}`
        : 'http://localhost:5000/api/items';
      const res = await axios.get(endpoint);
      setItems(res.data);
    } catch (err) {
      console.error('Error fetching items', err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [searchQuery]);

  const handleFormSubmit = async (formData, itemId) => {
    try {
      if (itemId) {
        // Update
        await axios.put(`http://localhost:5000/api/items/${itemId}`, formData);
      } else {
        // Create
        await axios.post('http://localhost:5000/api/items', formData);
      }
      setIsFormOpen(false);
      setEditingItem(null);
      fetchItems();
    } catch (err) {
      console.error('Error saving item', err);
      if (err.response?.status === 401) {
          alert("Unauthorized! Make sure to login properly.");
      }
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:5000/api/items/${id}`);
        fetchItems();
      } catch (err) {
        console.error('Error deleting item', err);
      }
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem' }}>Dashboard</h1>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search size={20} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
          </div>
          
          <button onClick={() => { setEditingItem(null); setIsFormOpen(true); }} className="btn btn-primary">
            <PlusCircle size={20} /> Report Item
          </button>
        </div>
      </div>

      <div className="grid">
        {items.length === 0 ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }} className="glass-card">
            No items found. Report a lost or found item!
          </div>
        ) : (
          items.map(item => (
            <ItemCard 
              key={item._id} 
              item={item} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))
        )}
      </div>

      {isFormOpen && (
        <ItemForm 
          initialData={editingItem} 
          onClose={() => { setIsFormOpen(false); setEditingItem(null); }} 
          onSubmit={handleFormSubmit} 
        />
      )}
    </div>
  );
};

export default Dashboard;
