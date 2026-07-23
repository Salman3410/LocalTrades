import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 24,
    paddingHorizontal: 20,
  },

  /* ==========================
            TABS
  ========================== */

  tabs: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    padding: 4,
    marginHorizontal: 20,
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

  /* ==========================
          BOOKING CARD
  ========================== */

  bookingCard: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 20,
    marginBottom: 16,

    padding: 18,

    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  workerName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  profession: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  /* ==========================
          BOOKING INFO
  ========================== */

  bookingInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
  },

  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#475569",
    flex: 1,
  },

  /* ==========================
            PRICE
  ========================== */

  price: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "700",
    color: "#2563EB",
  },

  /* ==========================
           ACTIONS
  ========================== */

  actionRow: {
    flexDirection: "row",
    marginTop: 20,
  },

  outlineButton: {
    flex: 1,

    height: 44,

    borderRadius: 12,

    borderWidth: 1.5,
    borderColor: "#2563EB",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 10,
  },

  outlineButtonText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },

  primaryButton: {
    flex: 1,

    height: 44,

    borderRadius: 12,

    backgroundColor: "#2563EB",

    justifyContent: "center",
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  /* ==========================
          EMPTY STATE
  ========================== */

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
    marginTop: 80,
  },

  emptyTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
  },
});
