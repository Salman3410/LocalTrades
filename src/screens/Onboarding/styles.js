import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },

  emoji: {
    fontSize: 90,
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },

  description: {
    marginTop: 20,
    fontSize: 17,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 28,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingBottom: 40,
  },

  skip: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "600",
  },

  next: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },

  dots: {
    flexDirection: "row",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#2563EB",
    width: 24,
  },
});
