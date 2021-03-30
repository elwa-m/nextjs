/* 
1. Erstellt eine Seite "Suche".
2. Auf der Seite soll ein Text-Eingabefeld sein, 
dessen Inhalt an die API /api/uppercase gesendet werden soll.
3. Die Antwort soll in einem strong-Element mit der Klasse
big-text angezeigt werden.

*/
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {useDebouncedValue} from "../hooks/useDebouncedValue";

export default function Suche(res) {
  const [text, setText] = useState("");
  const [bigText, setBigText] = useState("");

  const debouncedText=useDebouncedValue(text,300);

  useEffect(() => {
    async function fetchBigText() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/uppercase?text=${debouncedText}`
        );
        if(!response.ok){}
        const bigTextData = await response.json();
        setBigText(bigTextData.bigText);//shuffledText
      } catch (error) {
        console.log(error);
      }
    }
    fetchBigText();
  }, [debouncedText]);
  return (
    <Layout title="Suche">
      <label htmlFor="text">Text zum versenden </label>
      <input id="text" value={text} onChange={(e) => setText(e.target.value)} />
      <strong className="big-text">{bigText}</strong>
      
    </Layout>
  );
}
