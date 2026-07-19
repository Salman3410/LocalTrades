import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 35,
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  appName: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: "700",
    color: "#111827",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 10,
    marginBottom: 35,
    lineHeight: 24,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 10,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 56,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#111827",
  },

  forgotContainer: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },

  forgot: {
    color: "#2563EB",
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: "#2563EB",
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  or: {
    marginHorizontal: 15,
    color: "#6B7280",
    fontWeight: "600",
  },

  googleButton: {
    height: 56,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
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
    marginTop: 35,
  },

  bottomText: {
    color: "#6B7280",
    fontSize: 15,
  },

  register: {
    color: "#2563EB",
    fontWeight: "700",
    marginLeft: 5,
  },
});