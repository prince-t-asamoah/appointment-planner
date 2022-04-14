import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const capName = (value) => {
    return value.replace(/(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase());
  }

  const getValue = ({target}) => {
    if (target.id === 'name') {
      setName(capName(target.value));
    } else if (target.id === 'phone') {
      setPhone(target.value);
    } else if (target.id === 'email') {
      setEmail(target.value);
    }
  }
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          placeholder="E.g. Kwame Nkrumah"
          onChange={getValue}
          autoFocus
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          placeholder="E.g. 024-205-0954"
          pattern="^[0-9]\d{2}-\d{3}-\d{4}$"
          onChange={getValue}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="E.g. kwame.nkrumah@gmail.com"
          onChange={getValue}
          required
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};
