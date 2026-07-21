import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  /* ================= HEADER ================= */

  header: {
    height: 120,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  /* ================= CONTENT ================= */

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },

  /* ================= ADDRESS CARD ================= */

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
    width: 0,
    height: 4,
    },
    elevation: 3,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /* ================= TYPE BADGE ================= */

  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  typeText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#2563EB",
  },

  /* ================= DEFAULT BADGE ================= */

  defaultBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  defaultText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#16A34A",
  },

  /* ================= ADDRESS DETAILS ================= */

  addressContainer: {
    marginTop: 18,
  },

  addressLine: {
    fontSize: 15,
    color: "#374151",
    marginBottom: 5,
  },

  addressCity: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 3,
  },

  addressPostal: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 18,
  },

  /* ================= ACTION BUTTONS ================= */

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  editText: {
    marginLeft: 6,
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "600",
  },

  deleteText: {
    marginLeft: 6,
    color: "#EF4444",
    fontSize: 14,
    fontWeight: "600",
  },

  /* ================= EMPTY STATE ================= */

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  emptySubtitle: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
    marginBottom: 25,
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 8,
  },

  /* ================= ADD ADDRESS BUTTON ================= */

  addAddressButton: {
    height: 54,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  addAddressText: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",

    marginLeft: 8,
  },

  /* ================= FORM ================= */

  form: {
    padding: 20,
  },

  label: {
    fontSize: 14,

    fontWeight: "600",

    color: "#374151",

    marginBottom: 8,

    marginTop: 14,
  },

  input: {
    height: 52,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    paddingHorizontal: 16,

    fontSize: 15,

    color: "#111827",

    borderWidth: 1,

    borderColor: "#E5E7EB",
  },

  /* ================= ADDRESS TYPE SELECT ================= */

  typeRow: {
    flexDirection: "row",

    gap: 10,
  },

  typeOption: {
    flex: 1,

    paddingVertical: 12,

    borderRadius: 14,

    backgroundColor: "#FFFFFF",

    alignItems: "center",

    borderWidth: 1,

    borderColor: "#E5E7EB",
  },

  activeType: {
    backgroundColor: "#EFF6FF",

    borderColor: "#2563EB",
  },

  typeOptionText: {
    color: "#6B7280",

    fontWeight: "600",
  },

  activeTypeText: {
    color: "#2563EB",
  },

  /* ================= SAVE BUTTON ================= */

  saveButton: {
    height: 55,

    backgroundColor: "#2563EB",

    borderRadius: 16,

    justifyContent: "center",

    alignItems: "center",

    marginTop: 35,
  },

  saveText: {
    color: "#FFFFFF",

    fontSize: 16,

    fontWeight: "700",
  },
});
