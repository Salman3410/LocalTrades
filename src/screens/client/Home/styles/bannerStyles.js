import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    borderRadius: 24,

    padding: 22,

    marginBottom: 28,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    borderWidth: 1,

    borderColor: "#EEF2F7",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 3,
  },

  left: {
    flex: 1,
    paddingRight: 10,
  },

  badge: {
    alignSelf: "flex-start",

    backgroundColor: "#DBEAFE",

    paddingHorizontal: 12,

    paddingVertical: 5,

    borderRadius: 50,

    marginBottom: 14,
  },

  badgeText: {
    color: "#2563EB",

    fontSize: 11,

    fontWeight: "700",

    letterSpacing: 1,
  },

  title: {
    fontSize: 24,

    fontWeight: "700",

    color: "#111827",
  },

  subtitle: {
    marginTop: 8,

    fontSize: 15,

    lineHeight: 22,

    color: "#6B7280",
  },

  button: {
    marginTop: 20,

    alignSelf: "flex-start",

    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#2563EB",

    paddingHorizontal: 18,

    paddingVertical: 12,

    borderRadius: 14,
  },

  buttonText: {
    color: "#FFFFFF",

    fontWeight: "700",

    fontSize: 15,

    marginRight: 8,
  },

  iconContainer: {
    width: 90,

    height: 90,

    borderRadius: 45,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",

    alignItems: "center",
  },
});
