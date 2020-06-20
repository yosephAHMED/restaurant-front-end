import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// if no className is passed as props, then have the default hero to be
// the default class
// case: HomePage/ ErrorPage
Hero.defaultProps = {
  hero: "defaultHero",
};
