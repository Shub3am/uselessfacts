import { useState, useEffect } from "react";
import Factsgen from "../components/factsgenerator";
import NavBar from "../components/navbar";
import "../App.css";
function App() {
  const [Facts, SetFacts] = useState({ dailyfacts: "", randomfacts: "" }); //Using React Hooks Here

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/today.json?language=en")
      .then((today) => today.json())
      .then((todayfacts) =>
        SetFacts((initial) => {
          return { ...initial, dailyfacts: todayfacts.text };
        })
      )
      .then(
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
          .then((random) => random.json())
          .then((randomfacts) =>
            SetFacts((initial) => {
              return { ...initial, randomfacts: randomfacts.text };
            })
          )
      )
      .catch(() =>
        SetFacts((prev) => {
          return {
            randomfacts: "Wait 5 Seconds!",
            dailyfacts: "Wait 5 Seconds!",
          };
        })
      );
  }, []);

  const { dailyfacts, randomfacts } = Facts;

  return (
    <div>
      <NavBar url={dailyfacts} />
      <Factsgen randomfacts={randomfacts} />
    </div>
  );
}

export default App;
