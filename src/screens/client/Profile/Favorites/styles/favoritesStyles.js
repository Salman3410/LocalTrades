import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  /* ==========================
            HEADER
  ========================== */

  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,

    backgroundColor: "#FFFFFF",
  },

  backButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#F1F5F9",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  /* ==========================
            CARD
  ========================== */

  card: {
    flexDirection: "row",

    alignItems: "center",

    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 16,

    marginBottom: 16,

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  avatar: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  /* ==========================
            INFO
  ========================== */

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

    color: "#2563EB",

    fontWeight: "600",
  },

  row: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 8,
  },

  rating: {
    marginLeft: 5,

    fontSize: 13,

    color: "#374151",

    fontWeight: "600",
  },

  jobs: {
    marginLeft: 8,

    fontSize: 13,

    color: "#6B7280",
  },

  location: {
    marginTop: 7,

    fontSize: 13,

    color: "#6B7280",
  },

  /* ==========================
            RIGHT
  ========================== */

  right: {
    alignItems: "flex-end",

    justifyContent: "space-between",

    height: 64,
  },

  price: {
    marginTop: 12,

    fontSize: 15,

    fontWeight: "700",

    color: "#2563EB",
  },

  /* ==========================
         EMPTY STATE
  ========================== */

  emptyContainer: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 120,

    paddingHorizontal: 40,
  },

  emptyTitle: {
    marginTop: 20,

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

  /* ==========================
         OPTIONAL BUTTON
  ========================== */

  button: {
    marginTop: 25,

    backgroundColor: "#2563EB",

    paddingHorizontal: 22,

    paddingVertical: 12,

    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",

    fontWeight: "600",

    fontSize: 15,
  },
});
