import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  safe: {
    flex: 1,
  },

  skip: {
    position: "absolute",

    right: 25,

    top: 40,

    zIndex: 10,
  },

  skipText: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "600",
  },

  imageBox: {
    height: "55%",

    justifyContent: "center",

    alignItems: "center",

    paddingTop: 40,
  },

  image: {
    width: 330,

    height: 330,

    resizeMode: "contain",
  },

  card: {
    flex: 1,

    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: 45,

    borderTopRightRadius: 45,

    paddingHorizontal: 30,

    paddingTop: 40,

    alignItems: "center",
  },

  title: {
    fontSize: 30,

    fontWeight: "800",

    color: "#111827",

    textAlign: "center",

    lineHeight: 38,
  },

  description: {
    fontSize: 16,

    color: "#6B7280",

    textAlign: "center",

    lineHeight: 24,

    marginTop: 15,

    paddingHorizontal: 10,
  },

  bottom: {
    position: "absolute",

    bottom: 35,

    left: 30,

    right: 30,

    alignItems: "center",
  },

  pagination: {
    flexDirection: "row",

    marginBottom: 25,
  },

  dot: {
    width: 8,

    height: 8,

    borderRadius: 10,

    backgroundColor: "#D1D5DB",

    marginHorizontal: 5,
  },

  activeDot: {
    width: 28,

    backgroundColor: "#2563EB",
  },

  button: {
    height: 58,

    width: "100%",

    backgroundColor: "#2563EB",

    borderRadius: 18,

    alignItems: "center",

    justifyContent: "center",
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 17,

    fontWeight: "700",
  },
});
