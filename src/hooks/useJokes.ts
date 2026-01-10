import { useState } from "react";
import type { Joke } from "../types/Joke";

export const useJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);
  const saveJoke = (joke: Joke) => {
    setSavedJokes((prev) => {
      if (prev.find((j) => j.id === joke.id)) return prev;
      return [...prev, joke];
    });
  };
  const deleteJoke = (id: number) => {
    setSavedJokes((prev) => prev.filter((j) => j.id !== id));
  };
  return { savedJokes, saveJoke, deleteJoke };
};
