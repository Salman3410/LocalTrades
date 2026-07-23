import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "30.8%",

    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingVertical: 18,

    alignItems: "center",

    borderWidth: 1,
    borderColor: "#EEF2F7",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 2,
  },

  iconContainer: {
    width: 56,
    height: 56,

    borderRadius: 28,

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 12,

    fontSize: 13,

    fontWeight: "600",

    color: "#1F2937",

    textAlign: "center",

    lineHeight: 18,

    paddingHorizontal: 6,
  },
});
