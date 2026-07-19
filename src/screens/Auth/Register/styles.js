import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EAF2FF",
    justifyContent: "center",
    alignItems: "center",
  },

  appName: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
  },

  subtitle: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
  },

  label: {
    marginBottom: 8,
    marginLeft: 3,
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
    height: 56,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111827",
  },

  primaryButton: {
    backgroundColor: "#2563EB",
    height: 56,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  primaryButtonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  or: {
    marginHorizontal: 15,
    color: "#9CA3AF",
    fontWeight: "600",
  },

  googleButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  googleText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  bottomText: {
    color: "#6B7280",
    fontSize: 15,
  },

  login: {
    color: "#2563EB",
    marginLeft: 5,
    fontWeight: "700",
  },
});
