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
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
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
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2563EB",
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  profession: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 3,
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
    fontSize: 14,
    color: "#6B7280",
  },

  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#2563EB",
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
  // CHAT HEADER
  // ==========================

  chatHeader: {
    height: 120,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  chatLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  chatUser: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginLeft: 12,
  },

  chatAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
  },

  chatAvatarText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2563EB",
  },

  onlineDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: "#22C55E",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  chatInfo: {
    marginLeft: 12,
    flex: 1,
  },

  chatName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  chatProfession: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 2,
  },

  chatStatus: {
    fontSize: 12,
    color: "#16A34A",
    marginTop: 2,
  },
  statusText: {
    marginLeft: 5,
    fontSize: 10,
    fontWeight: "600",
    color: "#DBEAFE",
  },

  chatActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
  },

  // ==========================
  // CHAT LIST
  // ==========================

  chatList: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 30,
  },

  // ==========================
  // MESSAGE BUBBLES
  // ==========================

  messageWrapper: {
    flexDirection: "row",
    marginBottom: 14,
  },

  userWrapper: {
    justifyContent: "flex-end",
  },

  workerWrapper: {
    justifyContent: "flex-start",
  },

  bubble: {
    maxWidth: "80%",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
  },

  userBubble: {
    backgroundColor: "#2563EB",
    borderBottomRightRadius: 6,
  },

  workerBubble: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 6,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 1,
  },

  messageText: {
    fontSize: 14,
    lineHeight: 21,
  },

  userText: {
    color: "#FFFFFF",
  },

  workerText: {
    color: "#111827",
  },

  messageFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 6,
  },

  messageTime: {
    fontSize: 10,
  },

  userTime: {
    color: "#DBEAFE",
  },

  workerTime: {
    color: "#9CA3AF",
  },
  // ==========================
  // INPUT AREA
  // ==========================

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  inputIcon: {
    width: 38,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  messageInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    backgroundColor: "#F3F4F6",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 15,
    color: "#111827",
    marginHorizontal: 4,
  },

  sendButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,

    shadowColor: "#2563EB",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 4,
  },

  // ==========================
  // OPTIONAL UTILITIES
  // ==========================

  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },

  sectionSpacing: {
    marginTop: 20,
  },

  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  // ==========================
  // DATE SEPARATOR
  // ==========================

  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  dateLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  dateText: {
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },
  // ==========================
  // TYPING INDICATOR
  // ==========================

  typingWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 14,
  },

  typingBubble: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 18,
    borderBottomLeftRadius: 6,
    maxWidth: "70%",

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 1,
  },

  typingDots: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#94A3B8",
    marginRight: 5,
  },

  typingText: {
    marginTop: 8,
    fontSize: 12,
    color: "#64748B",
  },
});