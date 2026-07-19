import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },

  keyboard: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  topSection: {
    alignItems: "center",
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },

  title: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 24,
    paddingHorizontal: 10,
  },

  label: {
    marginBottom: 8,
    color: "#374151",
    fontWeight: "600",
    fontSize: 14,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 58,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111827",
  },

  button: {
    marginTop: 28,
    backgroundColor: "#2563EB",
    height: 58,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#2563EB",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  backButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    marginLeft: 8,
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },
});
