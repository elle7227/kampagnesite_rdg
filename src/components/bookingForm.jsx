import React, { useState } from 'react';
import styles from "@/styles/Landing.module.css";



export default function BookingForm({ handleClose, clickedButton }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    tickets: 1,
    name: '',
    email: '',
    phone: '',
    card: '',
  });

  function handleNext() {
    setCurrentStep(currentStep + 1);
  }

  function handleChange(e){
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  function handleSubmit(e){
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Form submitted:', formData);
  }

  function handleBack() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div className={styles.modal}>
           <button className={styles.modal_closeButton} onClick={handleClose}>close</button>

    {currentStep === 1 && (
        <div>
          <h2>Tickets for {clickedButton}</h2>
          <div className={styles.formGroup}>
            <input
              type="number"
              id="tickets"
              name="tickets"
              min="1"
              placeholder="Antal gæster"
              value={formData.tickets}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="eventDate"></label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              onChange={handleChange}
              required
            />
          </div> 
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    
    {currentStep === 2 && (
      
        <form onSubmit={handleSubmit}>
           <h2>{formData.tickets} Tickets for {clickedButton}</h2>
          <button type="button" className={styles.modal_backButton} onClick={handleBack}>
          Back
        </button>
        
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="For- og efternavn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Mobil nr"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              id="card"
              name="card"
              placeholder="Card Details"
              value={formData.card}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
          
        </form>
      )}

      {currentStep === 3 && (
        <form onSubmit={handleSubmit}>
          <h2>Tickets for {clickedButton}</h2>
          <p>{formData.tickets} gæster</p>
          <p>Navn på reservation: {formData.name}</p>
          <p> Den: {formData.eventDate}</p>
          <button type="button" className={styles.modal_backButton} onClick={handleBack}>
          Back
        </button>
        <button type="submit" onClick={handleNext}>Book Now</button>
        </form>
      )}


{currentStep === 4 && (
        <div>
          <h1>Thanks for your booking</h1>
        </div> 
         
      )}
      </div>
  )
}