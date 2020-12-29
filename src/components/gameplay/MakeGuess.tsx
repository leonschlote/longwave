import React, { useContext } from "react";
import { GameType, RoundPhase, TeamName } from "../../state/GameState";
import { Spectrum } from "../common/Spectrum";
import { CenteredColumn } from "../common/LayoutElements";
import { Button } from "../common/Button";
import { GameModelContext } from "../../state/GameModelContext";
import { RecordEvent } from "../../TrackEvent";
import { ScoreCoopRound } from "../../state/ScoreRound";

export function MakeGuess() {
  const {
    gameState,
    localPlayer,
    clueGiver,
    spectrumCard,
    setGameState,
  } = useContext(GameModelContext);

  if (!clueGiver) {
    return null;
  }

  const notMyTurn =
    localPlayer.id === clueGiver.id ||
    (gameState.gameType === GameType.Teams &&
      localPlayer.team !== clueGiver.team);

  const guessingTeamString = TeamName(clueGiver.team);

  if (notMyTurn) {
    return (
      <div>
        <Spectrum spectrumCard={spectrumCard} guessingValue={gameState.guess} />
        <CenteredColumn>
          <div>
            {clueGiver.name}s Hinweis: <strong>{gameState.clue}</strong>
          </div>
          <div>Auf {guessingTeamString} warten...</div>
          {Object.keys(gameState.players).length < 2 && (
            <div
              style={{
                margin: 12,
                padding: "0 1em",
                border: "1px solid black",
              }}
            >
              <p>Lade andere Spieler ein dem Spiel beizutreten.</p>
              <p>Teile diese URL mit Ihnen: {window.location.href}</p>
            </div>
          )}
        </CenteredColumn>
      </div>
    );
  }

  return (
    <div>
      <Spectrum
        spectrumCard={spectrumCard}
        handleValue={gameState.guess}
        onChange={(guess: number) => {
          setGameState({
            guess,
          });
        }}
      />
      <CenteredColumn>
        <div>
          {clueGiver.name}s Hinweis: <strong>{gameState.clue}</strong>
        </div>
        <div>
          <Button
            text={`Submit Guess for ${TeamName(localPlayer.team)}`}
            onClick={() => {
              RecordEvent("guess_submitted", {
                spectrum_card: spectrumCard.join("|"),
                clue: gameState.clue,
                target: gameState.spectrumTarget.toString(),
                guess: gameState.guess.toString(),
              });

              if (gameState.gameType === GameType.Teams) {
                setGameState({
                  roundPhase: RoundPhase.CounterGuess,
                });
              } else if (gameState.gameType === GameType.Cooperative) {
                setGameState(ScoreCoopRound(gameState));
              } else {
                setGameState({
                  roundPhase: RoundPhase.ViewScore,
                });
              }
            }}
          />
        </div>
      </CenteredColumn>
    </div>
  );
}
