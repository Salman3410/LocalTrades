import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // ==========================
  // COMMON
  // ==========================

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  // ==========================
  // MESSAGES SCREEN
  // ==========================

  header: {
    height: 120,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: "#E5E7EB",
  },

  headerTitle: {
    fontSize: 19,

    fontWeight: "700",

    color: "#111827",
  },

  searchContainer: {
    height: 48,

    backgroundColor: "#FFFFFF",

    borderRadius: 14,

    margin: 16,

    paddingHorizontal: 15,

    flexDirection: "row",

    alignItems: "center",

    borderWidth: 1,

    borderColor: "#E5E7EB",
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    fontSize: 14,

    color: "#111827",
  },

  list: {
    paddingHorizontal: 16,

    paddingBottom: 30,
  },

  // ==========================
  // CONVERSATION CARD
  // ==========================

  card: {
    backgroundColor: "#FFFFFF",

    borderRadius: 16,

    padding: 15,

    marginBottom: 12,

    flexDirection: "row",

    alignItems: "center",
  },

  avatar: {
    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",

    alignItems: "center",
  },

  content: {
    flex: 1,

    marginLeft: 14,
  },

  topRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  name: {
    flex: 1,

    fontSize: 15,

    fontWeight: "700",

    color: "#111827",
  },

  time: {
    fontSize: 12,

    color: "#9CA3AF",
  },

  bottomRow: {
    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",

    marginTop: 6,
  },

  message: {
    flex: 1,

    fontSize: 13,

    color: "#6B7280",
  },

  badge: {
    backgroundColor: "#2563EB",

    minWidth: 22,

    height: 22,

    borderRadius: 11,

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 10,
  },

  badgeText: {
    color: "#FFFFFF",

    fontSize: 12,

    fontWeight: "700",
  },

  // ==========================
  // EMPTY STATE
  // ==========================

  emptyContainer: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 30,
  },

  emptyTitle: {
    fontSize: 18,

    fontWeight: "700",

    color: "#111827",

    marginTop: 15,
  },

  emptyText: {
    fontSize: 14,

    color: "#6B7280",

    textAlign: "center",

    marginTop: 8,
  },

  // ==========================
  // CHAT SCREEN HEADER
  // ==========================

  chatHeader: {
    height: 120,

    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",

    paddingHorizontal: 16,

    borderBottomWidth: 1,

    borderBottomColor: "#E5E7EB",
  },

  chatUser: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,

    marginLeft: 12,
  },

  chatAvatar: {
    width: 42,

    height: 42,

    borderRadius: 21,

    backgroundColor: "#EFF6FF",

    justifyContent: "center",

    alignItems: "center",
  },

  chatName: {
    fontSize: 15,

    fontWeight: "700",

    color: "#111827",

    marginLeft: 10,
  },

  chatProfession: {
    fontSize: 12,

    color: "#6B7280",

    marginLeft: 10,

    marginTop: 2,
  },

  // ==========================
  // CHAT MESSAGES
  // ==========================

  chatList: {
    padding: 16,

    paddingBottom: 20,
  },

  messageWrapper: {
    marginBottom: 12,

    flexDirection: "row",
  },

  userWrapper: {
    justifyContent: "flex-end",
  },

  workerWrapper: {
    justifyContent: "flex-start",
  },

  bubble: {
    maxWidth: "78%",

    paddingHorizontal: 14,

    paddingVertical: 10,

    borderRadius: 16,
  },

  userBubble: {
    backgroundColor: "#2563EB",

    borderBottomRightRadius: 4,
  },

  workerBubble: {
    backgroundColor: "#FFFFFF",

    borderBottomLeftRadius: 4,
  },

  messageText: {
    fontSize: 14,

    lineHeight: 20,
  },

  userText: {
    color: "#FFFFFF",
  },

  workerText: {
    color: "#111827",
  },

  messageTime: {
    fontSize: 10,

    marginTop: 5,
  },

  userTime: {
    color: "#DBEAFE",

    textAlign: "right",
  },

  workerTime: {
    color: "#9CA3AF",
  },

  // ==========================
  // INPUT
  // ==========================

  inputContainer: {
    backgroundColor: "#FFFFFF",

    flexDirection: "row",

    alignItems: "center",

    paddingHorizontal: 14,

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: "#E5E7EB",
  },

  messageInput: {
    flex: 1,

    height: 44,

    backgroundColor: "#F1F5F9",

    borderRadius: 22,

    paddingHorizontal: 18,

    fontSize: 14,

    color: "#111827",
  },

  sendButton: {
    width: 44,

    height: 44,

    borderRadius: 22,

    backgroundColor: "#2563EB",

    justifyContent: "center",

    alignItems: "center",

    marginLeft: 10,
  },
});
