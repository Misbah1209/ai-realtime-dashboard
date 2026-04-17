import React from "react";
import "./card.css";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
