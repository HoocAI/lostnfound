import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const ItemForm = ({ onSubmit, onClose, initialData = null }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    type: 'Lost',
    location: '',
    date: '',
    contactInfo: ''
  });

  useEffect(() => {
    if (initialData) {
      // Format date for date input
      const formattedDate = initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : '';
      setFormData({
        ...initialData,
        date: formattedDate
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, initialData ? initialData._id : null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 className="text-gradient" style={{ fontSize: '1.5rem' }}>
            {initialData ? 'Edit Item' : 'Report New Item'}
          </h3>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text)', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Item Name</label>
            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>Type</label>
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>Contact Info</label>
            <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} required placeholder="Phone or Email" />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required rows={3}></textarea>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              <Save size={18} /> {initialData ? 'Update' : 'Submit'}
            </button>
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
