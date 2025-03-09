import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateAuction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  const [formData, setFormData] = useState({
    itemName: '',
    currentBid: '',
    description: '',
    date: '',
  });

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/auctions/${id}`);
        setFormData(res.data); // Pre-fill form with auction details
      } catch (error) {
        console.error('Error fetching auction:', error);
      }
    };

    fetchAuction();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/auctions/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate('/dashboard'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating auction:', error);
    }
  };

  return (
    <div>
      <h2>Update Auction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />
        </label>

        <label>
          Current Bid:
          <input type="number" name="currentBid" value={formData.currentBid} onChange={handleChange} required />
        </label>

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>

        <label>
          Auction Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateAuction;
