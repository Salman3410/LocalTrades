import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 18,
    
  },

  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#111827",

    letterSpacing: 0.2,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",

    marginRight: 2,
  },
});
