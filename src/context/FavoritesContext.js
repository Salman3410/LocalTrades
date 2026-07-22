import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const FavoritesContext = createContext();

const STORAGE_KEY = "@favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // -----------------------------
  // Load Favorites
  // -----------------------------

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.log("Load Favorites Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Save Favorites
  // -----------------------------

  const saveFavorites = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.log("Save Favorites Error:", error);
    }
  };

  // -----------------------------
  // Add
  // -----------------------------

  const addFavorite = (worker) => {
    const exists = favorites.find((item) => item.id === worker.id);

    if (exists) return;

    const updated = [...favorites, worker];

    setFavorites(updated);

    saveFavorites(updated);
  };

  // -----------------------------
  // Remove
  // -----------------------------

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);

    setFavorites(updated);

    saveFavorites(updated);
  };

  // -----------------------------
  // Toggle
  // -----------------------------

  const toggleFavorite = (worker) => {
    const exists = favorites.find((item) => item.id === worker.id);

    let updated = [];

    if (exists) {
      updated = favorites.filter((item) => item.id !== worker.id);
    } else {
      updated = [...favorites, worker];
    }

    setFavorites(updated);

    saveFavorites(updated);
  };

  // -----------------------------
  // Check Favorite
  // -----------------------------

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  // -----------------------------
  // Clear
  // -----------------------------

  const clearFavorites = async () => {
    setFavorites([]);

    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        loading,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
