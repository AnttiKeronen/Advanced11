import { Card, CardContent, Typography, Button } from "@mui/material";
import type { Joke } from "../types/Joke";

interface Props {
  savedJokes: Joke[];
  deleteJoke: (id: number) => void;
}
const SavedPage = ({ savedJokes, deleteJoke }: Props) => {
  if (savedJokes.length === 0) return <Typography>No saved jokes yet.</Typography>;
  return (
    <div style={{ padding: 16 }}>
      {savedJokes.map((joke) => (
        <Card key={joke.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{joke.setup}</Typography>
            <Typography>{joke.punchline}</Typography>
            <Button color="error" variant="contained" sx={{ marginTop: 1 }} onClick={() => deleteJoke(joke.id)}>Delete</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default SavedPage;
