import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Screen
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  // Header
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
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  // Shared Section
  section: {
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 14,
  },

  // Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  // Worker Summary
  workerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 18,
    backgroundColor: "#F2F2F2",
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
    color: "#111",
  },

  workerProfession: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  ratingText: {
    marginLeft: 5,
    color: "#666",
    fontSize: 13,
  },

  // Input
  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111",
  },

  textArea: {
    height: 120,
    borderRadius: 14,
    backgroundColor: "#F7F7F7",
    padding: 16,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#111",
  },

  // Chips
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: "#F5F5F5",
  },

  chipActive: {
    backgroundColor: "#111",
  },

  chipText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },

  chipActiveText: {
    color: "#FFFFFF",
  },

  // Price
  priceCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  priceLabel: {
    color: "#666",
    fontSize: 14,
  },

  priceValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  // Bottom Button
  bottomContainer: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
  },

  continueButton: {
    height: 56,
    backgroundColor: "#111",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
  // Dropdown

  dropdown: {
    height: 54,
    borderRadius: 14,
    backgroundColor: "#F7F7F7",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 16,
  },

  dropdownText: {
    fontSize: 15,
    color: "#111",
    fontWeight: "500",
  },
});
