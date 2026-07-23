import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EEF2F7",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  compactCard: {
    paddingVertical: 14,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  profession: {
    marginTop: 2,
    fontSize: 13,
    color: "#2563EB",
    fontWeight: "600",
  },

  badge: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "600",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    
  },

  rating: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },

  jobs: {
    marginLeft: 6,
    fontSize: 12,
    color: "#94A3B8",
  },

  location: {
    marginTop: 8,
    fontSize: 13,
    color: "#6B7280",
  },

  right: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 10,
  },

  bottomRight: {
    alignItems: "flex-end",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    height: 34,
    minWidth: 74,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
});
