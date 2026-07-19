import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,

    height: 70,

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    flexDirection: "row",

    justifyContent: "space-around",

    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 12,
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  activeLabel: {
    color: "#2563EB",
  },
});
