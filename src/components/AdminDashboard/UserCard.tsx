import React from "react";
import "./UserCard.css";

interface UserCardProps {
  name: string;
  email: string;
  phone: string;
  price: string;
  filingType: string;
}

function UserCard({ name, email, phone, price, filingType }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-info">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
        <p className="user-phone">{phone}</p>
      </div>
      <div className="user-price-filing">
        <p className="price">{price}</p>
        <p className="filing-type">{filingType}</p>
      </div>
      <hr className="divider" />
      <div className="user-assign">
        <label htmlFor={`assign-${name}`}>Assigned Operator</label>
        <select id={`assign-${name}`}>
          <option>Not assigned</option>
          <option>Operator 1</option>
          <option>Operator 2</option>
          <option>Operator 3</option>
        </select>
      </div>
    </div>
  );
}

export default UserCard;
