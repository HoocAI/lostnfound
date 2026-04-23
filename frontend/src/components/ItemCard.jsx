import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MapPin, Calendar, Phone, Edit2, Trash2 } from 'lucide-react';

const ItemCard = ({ item, onEdit, onDelete }) => {
  const { user } = useContext(AuthContext);
  const isOwner = user && item.userId === user.id;

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{item.itemName}</h3>
        <span className={`badge ${item.type === 'Lost' ? 'badge-lost' : 'badge-found'}`}>
          {item.type}
        </span>
      </div>
      
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px', flex: 1 }}>
        {item.description}
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontSize: '0.9rem', color: '#CBD5E1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={16} color="var(--primary)" />
          {item.location}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={16} color="var(--primary)" />
          {new Date(item.date).toLocaleDateString()}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Phone size={16} color="var(--primary)" />
          {item.contactInfo}
        </div>
      </div>
      
      {isOwner && (
        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <button onClick={() => onEdit(item)} className="btn btn-secondary" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
            <Edit2 size={14} /> Edit
          </button>
          <button onClick={() => onDelete(item._id)} className="btn btn-danger" style={{ flex: 1, padding: '8px', fontSize: '0.85rem' }}>
            <Trash2 size={14} /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
