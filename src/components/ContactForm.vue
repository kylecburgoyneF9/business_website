<template>
      <!-- 'contact' section design and elements -->
  <section class="contact" id="contact">
    <h2 class="heading">Contact <span>Me!</span></h2>
    <form action="#">
      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Full Name" required>
        </div>
        <div class="input-field">
          <input type="email" placeholder="Email Address" required>
        </div>
      </div>
      <div class="input-box">
        <div class="input-field">
          <input type="tel" placeholder="Mobile Number" required>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Email Subject" required>
        </div>
      </div>
      <div class="textarea-field">
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
      </div>
      <div class="btn-box btns">
        <button type="submit" class="btn">Submit</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.contact {
  min-height: auto;
  padding-bottom: 7rem;
  background: white;
}

.contact h2 {
  text-align: center;
}

.contact form {
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
}

.contact form .input-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.contact form .input-box .input-field {
  width: 49%;
  margin: 0.8rem 0;
}

.contact form .input-box .input-field input,
.contact form .textarea-field textarea {
  width: 100%;
  padding: 1.5rem;
  font-size: 1.6rem;
  color: var(--text-color);
  background: transparent;
  border-radius: 0.6rem;
  border: 0.2rem solid var(--main-color);
  transition: border-color 0.3s ease;
}

.contact form .input-box .input-field input::placeholder,
.contact form .textarea-field textarea::placeholder {
  color: var(--text-color);
}

.contact form .input-box .input-field input:focus,
.contact form .input-box .input-field input:valid,
.contact form .textarea-field textarea:focus,
.contact form .textarea-field textarea:valid {
  outline: none;
  border-color: var(--second-bg-color);
}

.contact form .input-box .input-field input:focus,
.contact form .textarea-field textarea:focus {
  border-color: var(--main-color);
}

.contact form .input-box .input-field input:focus::placeholder,
.contact form .textarea-field textarea:focus::placeholder {
  color: transparent;
}

.contact form .focus {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--second-bg-color);
  border-radius: 0.6rem;
  z-index: -1;
  transition: width 0.3s ease;
}

.contact form .textarea-field {
  margin: 0.8rem 0 2.7rem;
}

.contact form .textarea-field textarea {
  resize: none;
}

.contact form .btn-box.btns .btn {
  cursor: pointer;
}
@media (max-width: 462px) {
  .contact form .input-box .input-field {
    width: 100%;
  }
}
</style>