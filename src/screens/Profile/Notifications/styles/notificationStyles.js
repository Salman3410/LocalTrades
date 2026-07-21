import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginTop: 15,
  },

  subHeading: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 22,
  },

  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,

    paddingHorizontal: 18,
    paddingVertical: 18,

    marginBottom: 14,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 2,
  },

  left: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },
});
