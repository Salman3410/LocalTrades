import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 20,
    paddingBottom: 120,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
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
    fontSize: 22,
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#F8F8F8",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },

  workerName: {
    fontSize: 22,
    fontWeight: "700",
  },

  profession: {
    marginTop: 6,
    color: "#666",
  },

  label: {
    marginTop: 14,
    color: "#888",
    fontSize: 13,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginTop: 4,
  },

  priceCard: {
    backgroundColor: "#111",
    borderRadius: 18,
    padding: 20,
  },

  priceLabel: {
    color: "#DDD",
  },

  price: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 5,
  },

  bottom: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
  },

  button: {
    height: 56,
    borderRadius: 28,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },
});
