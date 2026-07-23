import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const STORAGE_KEY = "@currentUser";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log("Restore Session Error:", error);
    } finally {
      setLoading(false);
    }
  }

  // ----------------------------
  // Login
  // ----------------------------

  async function login(email, password) {
    try {
      /**
       * Backend Later:
       * const response = await api.login(email,password)
       */

      const loggedUser = {
        id: Date.now().toString(),

        role: "client", // client | provider

        fullName: "Sam",

        email,

        phone: "",

        profileImage: "",

        address: null,

        providerProfile: null,

        isVerified: false,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser));

      setUser(loggedUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("LOGIN ERROR:", error);
    }
  }

  // ----------------------------
  // Register
  // ----------------------------

  async function register(data) {
    try {
      const newUser = {
        id: Date.now().toString(),

        role: data.role, // client/provider

        fullName: data.fullName,

        email: data.email,

        phone: data.phone || "",

        profileImage: "",

        address: null,

        providerProfile:
          data.role === "provider"
            ? {
                profession: "",

                experience: "",

                description: "",

                services: [],

                availability: [],

                rating: 0,

                totalReviews: 0,

                completedJobs: 0,

                startingPrice: 0,
              }
            : null,

        isVerified: false,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));

      setUser(newUser);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  }

  // ----------------------------
  // Logout
  // ----------------------------

  async function logout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  }

  // ----------------------------
  // Update Profile
  // ----------------------------

  async function updateProfile(data) {
    try {
      const updatedUser = {
        ...user,

        ...data,

        updatedAt: new Date().toISOString(),
      };

      setUser(updatedUser);

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        isAuthenticated,

        login,

        register,

        logout,

        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
