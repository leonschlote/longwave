import React from "react";

export function CommonFooter() {
  return (
    <div
      style={{
        paddingTop: 8,
        borderTop: "1px solid black",
        color: "gray",
        fontSize: "small",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 8 }}>
        <Link href="https://www.wavelength.zone/" text="Wavelength" /> wurde
        von Wolfgang Warsch, Alex Hague und Justin Vickers entwickelt, von Evan Bailey und Margarethe Schoen{" "}
        <Link
          href="https://github.com/cynicaloptimist/longwave"
          text="fürs Internet angepasst"
        />{", "} und von Leon Schlote übersetzt.
      </p>
      {/* we want referrer, so: */}
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a target="_blank" href="https://www.patreon.com/improvedinitiative">
        <img
          alt="Patreon logo"
          title="Support us on Patreon!"
          src="./Digital-Patreon-Wordmark_FieryCoral.png"
          style={{ width: "150px", margin: 8 }}
        />
      </a>
    </div>
  );
}

function Link(props: { href: string; text: string }) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.text}
    </a>
  );
}
