import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ==========================
            CONTAINER
  ========================== */

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  /* ==========================
            HEADER
  ========================== */

  header: {
    backgroundColor: "#FFFFFF",
    paddingTop: 55,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  headerSubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#64748B",
    marginLeft: 56,
  },

  /* ==========================
            SEARCH
  ========================== */

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 20,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: "#111827",
  },

  /* ==========================
         SECTION TITLE
  ========================== */

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginHorizontal: 20,
    marginBottom: 14,
  },

  /* ==========================
        POPULAR CHIPS
  ========================== */

  popularList: {
    paddingHorizontal: 20,
    paddingBottom: 22,
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    height: 42,
    borderRadius: 22,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  chipIcon: {
    marginRight: 8,
  },

  chipText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },

  /* ==========================
        CATEGORY GRID
  ========================== */

  categoryList: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EEF2F7",
    flexDirection: "row",
    alignItems: "center",
  },

  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  categoryInfo: {
    flex: 1,
  },

  categoryTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  categoryDescription: {
    marginTop: 4,
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
  },

  categoryCount: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "600",
    color: "#2563EB",
  },

  arrowContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#F8FAFC",
    justifyContent: "center",
    alignItems: "center",
  },

  /* ==========================
        NEED HELP CARD
  ========================== */

  helpCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 40,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEF2F7",
  },

  helpLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  helpIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  helpTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  helpSubtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 20,
    color: "#64748B",
  },

  helpButton: {
    marginTop: 18,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  helpButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
    marginRight: 6,
  },

  /* ==========================
          EMPTY STATE
  ========================== */

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    paddingHorizontal: 40,
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
  },

  emptySubtitle: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 14,
    color: "#64748B",
    lineHeight: 22,
  },
});
