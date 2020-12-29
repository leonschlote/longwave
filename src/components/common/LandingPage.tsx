import React from "react";
import { useHistory } from "react-router-dom";
import { RandomFourCharacterString } from "../../state/RandomFourCharacterString";
import { CenteredColumn } from "./LayoutElements";
import { Button } from "./Button";
import { LongwaveAppTitle } from "./Title";

export function LandingPage() {
  const history = useHistory();
  return (
    <CenteredColumn>
      <LongwaveAppTitle />
      <Button
        text="Create Room"
        onClick={() => {
          history.push("/" + RandomFourCharacterString());
        }}
      />
      <p style={{ margin: 8 }}>
        <strong>Longwave</strong> ist eine Online-Version des {" "}
        <em>Wavelength</em> Brettspiels.
      </p>
    </CenteredColumn>
  );
}
