import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 1,
  },

  tagline: {
    color: "#DBEAFE",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 24,
  },

  loader: {
    marginTop: 60,
  },
});

export default styles;
