import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <div />
    </div>
  );
}
