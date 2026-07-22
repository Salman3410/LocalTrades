import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ==========================
  // CONTAINER
  // ==========================

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  // ==========================
  // HEADER
  // ==========================

  header: {
    height: 105,
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingBottom: 16,

    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },

  backButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#F1F5F9",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  readAll: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },

  // ==========================
  // LIST
  // ==========================

  list: {
    padding: 16,
    paddingBottom: 30,
    flexGrow: 1,
  },

  // ==========================
  // CARD
  // ==========================

  card: {
    flexDirection: "row",
    alignItems: "flex-start",

    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 15,

    marginBottom: 12,

    borderWidth: 1,
    borderColor: "#F1F5F9",
  },

  unreadCard: {
    borderLeftWidth: 4,
    borderLeftColor: "#2563EB",
  },

  // ==========================
  // ICON
  // ==========================

  iconContainer: {
    width: 48,
    height: 48,

    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",
  },

  // ==========================
  // CONTENT
  // ==========================

  content: {
    flex: 1,
    marginHorizontal: 14,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#111827",

    marginRight: 8,
  },

  time: {
    fontSize: 12,
    color: "#94A3B8",
  },

  message: {
    marginTop: 6,

    fontSize: 14,
    lineHeight: 21,

    color: "#6B7280",
  },

  // ==========================
  // RIGHT
  // ==========================

  right: {
    justifyContent: "space-between",
    alignItems: "center",

    height: 48,
  },

  unreadDot: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: "#2563EB",

    marginBottom: 10,
  },

  // ==========================
  // EMPTY
  // ==========================

  emptyContainer: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 40,
    marginTop: 100,
  },

  emptyTitle: {
    marginTop: 18,

    fontSize: 22,
    fontWeight: "700",

    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 10,

    textAlign: "center",

    fontSize: 15,
    lineHeight: 24,

    color: "#94A3B8",
  },
});
