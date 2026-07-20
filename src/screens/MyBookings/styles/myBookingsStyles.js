import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
  },

  tabs: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    padding: 4,
    marginBottom: 22,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: "#2563EB",
  },

  tabText: {
    color: "#6B7280",
    fontWeight: "600",
    fontSize: 14,
  },

  activeTabText: {
    color: "#FFFFFF",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  worker: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  profession: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  date: {
    marginTop: 6,
    color: "#9CA3AF",
    fontSize: 13,
  },

  right: {
    alignItems: "flex-end",
  },

  price: {
    fontWeight: "700",
    fontSize: 16,
    color: "#111827",
  },

  statusBadge: {
    marginTop: 8,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  status: {
    color: "#2563EB",
    fontSize: 12,
    fontWeight: "600",
  },
});
