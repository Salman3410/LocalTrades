import React, { createContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import notificationsData from "../data/notificationsData";

const NotificationContext = createContext();

const STORAGE_KEY = "@localtrades_notifications";

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_KEY);

      if (stored) {
        setNotifications(JSON.parse(stored));
      } else {
        setNotifications(notificationsData);

        await AsyncStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(notificationsData),
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const saveNotifications = async (data) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addNotification = (notification) => {
    const updated = [notification, ...notifications];

    setNotifications(updated);

    saveNotifications(updated);
  };

  const markAsRead = (id) => {
    const updated = notifications.map((item) =>
      item.id === id
        ? {
            ...item,
            read: true,
          }
        : item,
    );

    setNotifications(updated);

    saveNotifications(updated);
  };

  const markAllAsRead = () => {
    const updated = notifications.map((item) => ({
      ...item,
      read: true,
    }));

    setNotifications(updated);

    saveNotifications(updated);
  };

  const deleteNotification = (id) => {
    const updated = notifications.filter((item) => item.id !== id);

    setNotifications(updated);

    saveNotifications(updated);
  };

  const clearNotifications = async () => {
    setNotifications([]);

    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        loading,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        deleteNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
