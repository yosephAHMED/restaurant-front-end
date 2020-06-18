import React from "react";

export default function Title({ title, quote, subtitle, children }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <h6>{quote}</h6>
      <p>{subtitle}</p>
      <p>{children}</p>
      <div />
    </div>
  );
}
