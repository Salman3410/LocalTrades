import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 12,
    marginBottom: 28,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF4FF",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },

  location: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  notificationDot: {
    position: "absolute",
    top: 13,
    right: 13,

    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: "#EF4444",

    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  greetingContainer: {
    marginTop: 26,
  },

  greeting: {
    fontSize: 16,
    color: "#6B7280",
    fontWeight: "500",
  },

  username: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    lineHeight: 36,
  },
});
