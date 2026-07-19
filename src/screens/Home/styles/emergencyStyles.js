import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FEF2F2",

    borderRadius: 22,

    padding: 18,

    flexDirection: "row",

    alignItems: "center",

    marginTop: 20,
  },

  iconBox: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: "#FEE2E2",

    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flex: 1,

    marginLeft: 14,
  },

  title: {
    fontSize: 17,

    fontWeight: "700",

    color: "#991B1B",
  },

  text: {
    fontSize: 13,

    color: "#7F1D1D",

    marginTop: 4,

    lineHeight: 18,
  },

  button: {
    backgroundColor: "#DC2626",

    paddingHorizontal: 16,

    paddingVertical: 10,

    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",

    fontWeight: "700",
  },
});
