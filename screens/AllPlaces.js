import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/places/PlacesList";
import { fetchPlaces } from "../util/database";

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
}

// import { useIsFocused } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import PlacesList from "../components/places/PlacesList";

// export default function AllPlaces({ route }) {
//   const [loadedPlaces, setLoadedPlaces] = useState([]);
//   const isFocused = useIsFocused();
//   useEffect(() => {

//     if (isFocused && route.params) {
//       setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
//     }
//   }, [isFocused, route]);
//   return <PlacesList places={loadedPlaces} />;
// }
