import React, { useState } from 'react';
import styles from "@/styles/opskrifter.module.css";


export default function BookingForm({ clickedButton }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    card: '',
    tickets: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.modal}>
      <h1>Booking Form</h1>
      <h2>Tickets for: {clickedButton}</h2>
      <form onSubmit={handleSubmit}>

      <label htmlFor="tickets">Number of Tickets:</label>
        <input
          type="number"
          id="tickets"
          name="tickets"
          min="1"
          value={formData.tickets}
          onChange={handleChange}
          required
        /><br />
        
        <label htmlFor="name">Name:</label>

        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="card">Card Details:</label>
        <input
          type="text"
          id="card"
          name="card"
          value={formData.card}
          onChange={handleChange}
          required
        /><br />

       
        <button type="submit">Book Now</button>
      </form>
    </div>
  )
}