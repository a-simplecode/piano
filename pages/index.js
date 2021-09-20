import Head from "next/head";
import { useEffect } from "react";
import * as Tone from "tone";

const numbs = [2, 3, 4, 5];
const chars = ["C", "D", "E", "F", "G", "A", "B"];

const setOfNotes = (numb) => {
  return chars.map((char, idx) => (
    <span key={"note_" + idx} onClick={() => onClick(char + numb)}>
      {char + numb}
    </span>
  ));
};

const onClick = (note) => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack(note, 0);
  synth.triggerRelease(note, now + 0.5);
};

const keyPress = (key) => {
  switch (key.key) {
    //2 setOfNotes
    case "1":
      onClick("C2");
      break;
    case "2":
      onClick("D2");
      break;
    case "3":
      onClick("E2");
      break;
    case "4":
      onClick("F2");
      break;
    case "5":
      onClick("G2");
      break;
    case "6":
      onClick("A2");
      break;
    case "7":
      onClick("B2");
      break;
    //3 setOfNotes
    case "q":
      onClick("C3");
      break;
    case "w":
      onClick("D3");
      break;
    case "e":
      onClick("E3");
      break;
    case "r":
      onClick("F3");
      break;
    case "t":
      onClick("G3");
      break;
    case "y":
      onClick("A3");
      break;
    case "u":
      onClick("B3");
      break;
    //4 setOfNotes
    case "a":
      onClick("C4");
      break;
    case "s":
      onClick("D4");
      break;
    case "d":
      onClick("E4");
      break;
    case "f":
      onClick("F4");
      break;
    case "g":
      onClick("G4");
      break;
    case "h":
      onClick("A4");
      break;
    case "j":
      onClick("B4");
      break;
    //5 setOfNotes
    case "z":
      onClick("C5");
      break;
    case "x":
      onClick("D5");
      break;
    case "c":
      onClick("E5");
      break;
    case "v":
      onClick("F5");
      break;
    case "b":
      onClick("G5");
      break;
    case "n":
      onClick("A5");
      break;
    case "m":
      onClick("B5");
      break;

    default:
      break;
  }
};

export default function Home() {
  useEffect(() => {
    addEventListener("keypress", keyPress);

    return () => removeEventListener("keypress", keyPress);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Web Piano</h1>

        <div>
          {numbs.map((numb, idx) => (
            <span key={"set_" + idx}>{setOfNotes(numb)} </span>
          ))}
        </div>
      </main>

      <footer>footer</footer>
    </div>
  );
}
