import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    marginBottom: 16,

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

  topSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,

    marginLeft: 14,
  },

  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  profession: {
    fontSize: 14,
    color: "#6B7280",

    marginTop: 3,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
  },

  rating: {
    fontSize: 14,
    fontWeight: "600",

    marginLeft: 5,

    color: "#111827",
  },

  jobs: {
    fontSize: 14,

    color: "#6B7280",

    marginLeft: 6,
  },

  status: {
    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 20,
  },

  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },

  bottomSection: {
    marginTop: 16,

    paddingTop: 14,

    borderTopWidth: 1,
    borderColor: "#F1F5F9",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",
  },

  bookButton: {
    backgroundColor: "#2563EB",

    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 12,
  },

  bookText: {
    color: "#FFFFFF",

    fontWeight: "700",

    fontSize: 14,
  },
});
