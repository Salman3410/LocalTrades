import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AddressContext = createContext();

const ADDRESS_KEY = "saved_addresses";

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load addresses

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      const data = await AsyncStorage.getItem(ADDRESS_KEY);

      if (data) {
        setAddresses(JSON.parse(data));
      }
    } catch (error) {
      console.log("Address Load Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveToStorage = async (data) => {
    await AsyncStorage.setItem(ADDRESS_KEY, JSON.stringify(data));
  };

  // Add Address

  const addAddress = async (address) => {
    const newAddress = {
      id: Date.now().toString(),

      ...address,
    };

    const updated = [...addresses, newAddress];
    setAddresses(updated);
    await saveToStorage(updated);
  };

  // Update Address

  const updateAddress = async (id, updatedData) => {
    const updated = addresses.map((item) =>
      item.id === id
        ? {
            ...item,
            ...updatedData,
          }
        : item,
    );
    setAddresses(updated);
    await saveToStorage(updated);
  };

  // Delete Address

  const deleteAddress = async (id) => {
    const updated = addresses.filter((item) => item.id !== id);
    setAddresses(updated);
    await saveToStorage(updated);
  };

  // Set Default Address

  const setDefaultAddress = async (id) => {
    const updated = addresses.map((item) =>
      item.id === id
        ? {
            ...item,
            default: true,
          }
        : {
            ...item,
            default: false,
          },
    );

    setAddresses(updated);
    await saveToStorage(updated);
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        loading,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
