import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // =====================
  // Screen
  // =====================

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  // =====================
  // Header
  // =====================

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

    backgroundColor: "#F8FAFC",

    borderWidth: 1,
    borderColor: "#E5E7EB",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  // =====================
  // Sections
  // =====================

  section: {
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",

    marginBottom: 14,
  },

  // =====================
  // Cards
  // =====================

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 18,

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

  // =====================
  // Worker
  // =====================

  workerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 68,
    height: 68,

    borderRadius: 18,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 30,
  },

  workerInfo: {
    flex: 1,
    marginLeft: 14,
  },

  workerName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  workerProfession: {
    marginTop: 4,

    fontSize: 14,

    color: "#64748B",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
  },

  ratingText: {
    marginLeft: 4,

    fontSize: 13,

    color: "#64748B",
  },

  // =====================
  // Inputs
  // =====================

  input: {
    height: 54,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    paddingHorizontal: 16,

    fontSize: 15,
    color: "#111827",
  },

  textArea: {
    height: 120,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    padding: 16,

    textAlignVertical: "top",

    fontSize: 15,
    color: "#111827",
  },

  // =====================
  // Dropdown
  // =====================

  dropdown: {
    height: 54,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 16,
  },

  dropdownText: {
    fontSize: 15,
    fontWeight: "500",

    color: "#111827",
  },

  // =====================
  // Date Chips
  // =====================

  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    gap: 10,
  },

  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 12,

    backgroundColor: "#F8FAFC",

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  chipActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  chipText: {
    fontSize: 14,
    fontWeight: "600",

    color: "#475569",
  },

  chipActiveText: {
    color: "#FFFFFF",
  },

  // =====================
  // Time Slots
  // =====================

  timeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    gap: 10,
  },

  timeChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,

    borderRadius: 12,

    backgroundColor: "#FFFFFF",

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  timeChipActive: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  timeText: {
    fontSize: 14,
    fontWeight: "600",

    color: "#334155",
  },

  timeTextActive: {
    color: "#FFFFFF",
  },

  noSlotsContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  noSlotsText: {
    fontSize: 14,
    color: "#94A3B8",
  },

  // =====================
  // Price
  // =====================

  priceCard: {
    backgroundColor: "#EFF6FF",

    borderRadius: 18,

    padding: 18,

    borderWidth: 1,
    borderColor: "#DBEAFE",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceLabel: {
    fontSize: 14,
    color: "#64748B",
  },

  priceValue: {
    marginTop: 4,

    fontSize: 22,
    fontWeight: "700",

    color: "#2563EB",
  },

  // =====================
  // Bottom Button
  // =====================

  bottomContainer: {
    position: "absolute",

    left: 20,
    right: 20,
    bottom: 25,
  },

  continueButton: {
    height: 56,

    backgroundColor: "#2563EB",

    borderRadius: 28,

    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFFFFF",

    fontSize: 16,
    fontWeight: "700",
  },
});
