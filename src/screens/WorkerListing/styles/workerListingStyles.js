import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Screen

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
  },

  resultText: {
    marginTop: 4,
    fontSize: 14,
    color: "#777",
  },

  filterRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  filterButton: {
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  // Worker Card

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 20,

    padding: 15,

    marginBottom: 15,

    flexDirection: "row",

    shadowColor: "#000",

    shadowOpacity: 0.06,

    shadowRadius: 10,

    elevation: 3,
  },

  imageContainer: {
    width: 75,

    height: 75,

    borderRadius: 18,

    backgroundColor: "#F1F1F1",

    alignItems: "center",

    justifyContent: "center",
  },

  avatar: {
    fontSize: 35,
  },

  info: {
    flex: 1,

    marginLeft: 15,
  },

  nameRow: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  name: {
    fontSize: 17,

    fontWeight: "700",

    color: "#111",
  },

  status: {
    backgroundColor: "#E8F8EE",

    paddingHorizontal: 10,

    paddingVertical: 4,

    borderRadius: 20,
  },

  statusText: {
    fontSize: 11,

    color: "#1A9B4A",

    fontWeight: "600",
  },

  profession: {
    fontSize: 14,

    color: "#666",

    marginTop: 4,
  },

  metaRow: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 8,
  },

  metaItem: {
    flexDirection: "row",

    alignItems: "center",
  },

  metaText: {
    fontSize: 13,

    color: "#555",

    marginLeft: 4,
  },

  dot: {
    width: 4,

    height: 4,

    borderRadius: 2,

    backgroundColor: "#999",

    marginHorizontal: 8,
  },

  locationRow: {
    flexDirection: "row",

    alignItems: "center",

    marginTop: 8,
  },

  location: {
    fontSize: 13,

    color: "#777",

    marginLeft: 4,
  },

  price: {
    fontSize: 15,

    fontWeight: "700",

    marginTop: 10,

    color: "#111",
  },
});
