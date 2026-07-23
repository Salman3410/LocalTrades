import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    height: 56,

    borderRadius: 16,

    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#E5E7EB",

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },

  input: {
    flex: 1,

    height: "100%",

    marginLeft: 12,

    fontSize: 16,

    color: "#111827",

    paddingVertical: 0, // Fixes Android cursor alignment
  },

  filterButton: {
    width: 56,
    height: 56,

    marginLeft: 12,

    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2563EB",

    elevation: 4,

    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});
