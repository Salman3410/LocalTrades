import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* HEADER */

  profileHeader: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 22,

    paddingTop: 60,

    paddingBottom: 20,

    backgroundColor: "#FFFFFF",
  },

  leftSection: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  avatar: {
    width: 62,

    height: 62,

    borderRadius: 31,

    backgroundColor: "#2563EB",

    justifyContent: "center",

    alignItems: "center",
  },

  avatarText: {
    color: "#FFFFFF",

    fontSize: 22,

    fontWeight: "700",
  },

  userInfo: {
    marginLeft: 16,

    flex: 1,
  },

  name: {
    fontSize: 20,

    fontWeight: "600",

    color: "#111827",
  },

  email: {
    marginTop: 3,

    fontSize: 14,

    color: "#6B7280",
  },

  editButton: {
    width: 38,

    height: 38,

    borderRadius: 19,

    justifyContent: "center",

    alignItems: "center",
  },

  divider: {
    height: 1,

    backgroundColor: "#E5E7EB",

    marginHorizontal: 22,
  },
  menuContainer: {
    paddingTop: 10,
  },

  menuItem: {
    height: 58,

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 22,

    backgroundColor: "#FFFFFF",
  },

  menuLeft: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  menuTitle: {
    marginLeft: 18,

    fontSize: 16,

    color: "#111827",

    fontWeight: "500",
  },

  menuRight: {
    flexDirection: "row",

    alignItems: "center",
  },

  badge: {
    minWidth: 22,

    height: 22,

    borderRadius: 11,

    backgroundColor: "#2563EB",

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 6,

    marginRight: 10,
  },

  badgeText: {
    color: "#FFFFFF",

    fontWeight: "700",

    fontSize: 11,
  },
  logoutContainer: {
    marginTop: 10,

    marginBottom: 40,
  },

  logoutRow: {
    height: 58,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    paddingHorizontal: 22,

    backgroundColor: "#FFFFFF",
  },

  logoutText: {
    marginLeft: 18,

    fontSize: 16,

    fontWeight: "500",

    color: "#DC2626",
  },
});
