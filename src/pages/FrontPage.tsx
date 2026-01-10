import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import type { Joke } from "../types/Joke";

interface Props {
  saveJoke?: (joke: Joke) => void;
}
const FrontPage = ({ saveJoke }: Props) => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchJoke = async () => {
    const controller = new AbortController();
    try {
      setLoading(true);
      const res = await fetch("https://official-joke-api.appspot.com/random_joke", { signal: controller.signal });
      const data: Joke = await res.json();
      setJoke(data);
    } catch (err) {
      if ((err as Error).name !== "AbortError") console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { fetchJoke(); }, []);
  return (
    <div style={{ padding: 16 }}>
      <Button variant="contained" onClick={fetchJoke}>Get new joke</Button>
      {loading && <Typography>Loading a joke...</Typography>}
      {joke && (
        <Card key={joke.id} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6">{joke.setup}</Typography>
            <Typography>{joke.punchline}</Typography>
            {saveJoke && <Button variant="contained" sx={{ marginTop: 2 }} onClick={() => saveJoke(joke)}>Save joke</Button>}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
export default FrontPage;
