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

  /* Header */

  header: {
    height: 120,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#EEF2F7",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  /* Intro */

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 24,
    marginBottom: 28,
  },

  /* Help Cards */

  card: {
    backgroundColor: "#FFFFFF",

    flexDirection: "row",
    alignItems: "center",

    padding: 18,

    marginBottom: 14,

    borderRadius: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  iconContainer: {
    width: 54,
    height: 54,

    borderRadius: 15,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 16,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  cardSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 20,
  },

  /* FAQ */

  faqCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    paddingHorizontal: 18,
    paddingVertical: 16,

    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  faqQuestion: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    paddingRight: 15,
  },

  faqAnswer: {
    marginTop: 14,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 24,
  },

  /* Contact */

  contactCard: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    padding: 22,

    alignItems: "center",

    marginHorizontal: 20,
    marginTop: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  contactTitle: {
    marginTop: 14,

    fontSize: 16,
    fontWeight: "700",

    color: "#111827",
  },

  contactValue: {
    marginTop: 6,

    fontSize: 14,

    color: "#6B7280",

    textAlign: "center",

    lineHeight: 22,
  },

  /* Version */

  versionBox: {
    alignItems: "center",
    marginTop: 40,
  },

  version: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  versionNumber: {
    marginTop: 6,
    fontSize: 14,
    color: "#9CA3AF",
  },
  
});
