import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedLit] = useState([]);
  const [status, setStatus] = useState("unloading");

  useEffect(() => {
    if (!animal) {
      setBreedLit([]);
    } else if (localCache[animal]) {
      setBreedLit(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedLit([]); 
      setStatus("loading");
 
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedLit(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
