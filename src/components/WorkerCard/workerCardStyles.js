import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    marginBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 3,
  },

  compactCard: {
    paddingVertical: 14,
  },

  avatar: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,

    marginLeft: 15,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",

    color: "#111827",
  },

  profession: {
    marginTop: 3,

    fontSize: 14,

    color: "#6B7280",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
  },

  rating: {
    marginLeft: 4,

    fontSize: 13,

    fontWeight: "600",

    color: "#111827",
  },

  jobs: {
    marginLeft: 6,

    fontSize: 13,

    color: "#9CA3AF",
  },

  location: {
    marginTop: 8,

    fontSize: 13,

    color: "#6B7280",
  },

  right: {
    alignItems: "flex-end",

    justifyContent: "space-between",

    height: 80,
  },

  badge: {
    paddingHorizontal: 10,

    paddingVertical: 5,

    borderRadius: 30,
  },

  badgeText: {
    fontSize: 11,

    fontWeight: "600",
  },

  price: {
    fontSize: 17,

    fontWeight: "700",

    color: "#2563EB",

    marginVertical: 6,
  },

  button: {
    backgroundColor: "#2563EB",

    paddingHorizontal: 18,

    height: 36,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",

    fontSize: 13,

    fontWeight: "600",
  },
});
