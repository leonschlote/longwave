import React from "react";
import { TurnSummaryModel } from "../../state/GameState";
import { CenteredColumn } from "../common/LayoutElements";
import { Spectrum } from "../common/Spectrum";

export function PreviousTurnResult(props: TurnSummaryModel) {
  const style: React.CSSProperties = {
    borderTop: "1px solid black",
    margin: 16,
    paddingTop: 16,
  };

  const glassStyle: React.CSSProperties = {
    position: "absolute",
    zIndex: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "rgba(255,255,255,0.5)",
  };

  return (
    <div style={style}>
      <CenteredColumn>
        <em>Vorherige Karte</em>
      </CenteredColumn>
      <div
        style={{
          position: "relative",
        }}
      >
        <div style={glassStyle} />
        <Spectrum
          spectrumCard={props.spectrumCard}
          handleValue={props.guess}
          targetValue={props.spectrumTarget}
        />
        <CenteredColumn>
          <div>
            {props.clueGiverName}s Hinweis: <strong>{props.clue}</strong>
          </div>
        </CenteredColumn>
      </div>
    </div>
  );
}
