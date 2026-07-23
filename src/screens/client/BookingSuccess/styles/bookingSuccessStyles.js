import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  icon: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#EAFBF0",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 30,
  },

  subtitle: {
    marginTop: 12,
    color: "#666",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    marginTop: 50,
    width: "100%",
    height: 56,
    borderRadius: 28,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },
});
