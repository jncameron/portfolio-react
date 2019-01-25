import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section class="contact">
      <h3 class="title">Join our newsletter</h3>	
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. 
          Sed aliquam dictum sapien, id sagittis augue malesuada eu.
        </p>
      <form>
        <input type="email" placeholder="Email" />
        <a href="#" class="btn">Subscribe now</a>
      </form>
    </section>
  )
}

export default Contact;