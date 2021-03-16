import React from "react";
import PropTypes from "prop-types";

import "./styleCard.css";

export const CardUser = ({
  id,
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <aside className="profile-card" key={id}>
      <header>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <h2>Phone: {phone}</h2>
        <h2>Website: {website}</h2>
      </header>
      <div className="profile-right">
        <div className="profile-address">
          <p>Adress:</p>
          <ul>
            <li>{address.suite}</li>
            <li>{address.street}</li>
            <li>{`${address.zipcode} - ${address.city}`}</li>
          </ul>
        </div>
        <div className="profile-company">
          <p>Company details:</p>
          <ul>
            <li>{company.name}</li>
            <li>{company.catchPhrase}</li>
            <li>{company.bs}</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

CardUser.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  company: PropTypes.string,
  address: PropTypes.string,
};
