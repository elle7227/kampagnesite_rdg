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
      <section className={styles.grey_top}>
        <button className={styles.modal_closeButton} onClick={handleClose}>close</button>
      </section>
    {currentStep === 1 && (
        <div className={styles.form_container}>
          <h2>Reservation til{clickedButton}</h2>
          <div className={styles.formGroup_1}>
            <p>Antal gæster</p>
            <input
              type="number"
              id="tickets"
              name="tickets"
              placeholder="Antal gæster"
              value={formData.tickets}
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
          <section className={styles.grey_top}>
            <button type="button" className={styles.modal_backButton} onClick={handleBack}>Tilbage</button> 
          </section>
          <div className={styles.form_container}>
            <h2>{formData.tickets} Reservation til {clickedButton}</h2>
        
    
            <div className={styles.formGroup}>
              <p>Dine kontaktoplysninger</p>
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
          </div>
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
          
        </form>
      )}

      {currentStep === 3 && (
        <form onSubmit={handleSubmit}>
          <button type="button" className={styles.modal_backButton} onClick={handleBack}>
            Tilbage
          </button>
         <div className={styles.form_container}>
            <h2>Reservation til {clickedButton}</h2>
            <p>{formData.tickets} gæster</p>
            <p>Navn på reservation: {formData.name}</p>
            </div>
          <button type="submit" className={styles.nextButton} onClick={handleNext}>Book Now</button>
        </form>
      )}


{currentStep === 4 && (
        <div>
          <h1>Din reservation er beskræftet</h1>
          <p>og en booking bekræftigelse er sendt til: {formData.email}</p>
          <button type="button" className={styles.nextButton} onClick={handleClose}>
            Exit
          </button>
        </div> 
         
      )}
      </div>
  )
}