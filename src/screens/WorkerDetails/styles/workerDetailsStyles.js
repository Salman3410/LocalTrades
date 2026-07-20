import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  header: {
    paddingTop: 50,
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
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 15,
  },

  profileSection: {
    alignItems: "center",
    paddingVertical: 20,
  },

  imageBox: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    fontSize: 55,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 15,
  },

  profession: {
    fontSize: 15,
    color: "#777",
    marginTop: 5,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  rating: {
    marginLeft: 5,
    fontWeight: "600",
  },

  location: {
    marginTop: 8,
    color: "#666",
  },

  section: {
    marginTop: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: "#666",
  },

  serviceBox: {
    marginTop: 12,
    backgroundColor: "#F7F7F7",
    padding: 15,
    borderRadius: 15,
    gap: 8,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 100,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "700",
  },

  bookButton: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,

    height: 55,

    borderRadius: 30,

    backgroundColor: "#111",

    alignItems: "center",
    justifyContent: "center",
  },

  bookText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
