import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  /* ---------- Section ---------- */

  sectionContainer: {
    marginTop: 24,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#6B7280",
    letterSpacing: 0.8,
  },

  /* ---------- Card ---------- */

  item: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    paddingHorizontal: 16,
    paddingVertical: 16,

    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  /* ---------- Left ---------- */

  left: {
    flex: 1,

    flexDirection: "row",

    alignItems: "center",
  },

  iconBox: {
    width: 44,
    height: 44,

    borderRadius: 12,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  /* ---------- Text ---------- */

  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  subtitle: {
    marginTop: 3,

    fontSize: 13,

    color: "#6B7280",

    lineHeight: 18,
  },

  /* ---------- Right ---------- */

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemValue: {
    fontSize: 14,

    color: "#6B7280",

    marginRight: 8,
  },

  /* ---------- Danger ---------- */

  dangerButton: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    paddingVertical: 16,

    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",

    marginTop: 28,

    borderWidth: 1,
    borderColor: "#FECACA",
  },

  dangerText: {
    color: "#DC2626",

    fontSize: 16,

    fontWeight: "600",

    marginLeft: 10,
  },
});
