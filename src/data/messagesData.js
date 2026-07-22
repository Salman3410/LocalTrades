const messagesData = [
  {
    id: "1",

    worker: {
      id: "101",
      name: "Ali Electric Services",
      profession: "Electrician",
    },

    lastMessage: "I'll reach your location around 4 PM.",

    time: "2:30 PM",

    unread: 2,

    messages: [
      {
        id: "1",
        sender: "worker",
        text: "Hello 👋",
        time: "2:10 PM",
      },
      {
        id: "2",
        sender: "user",
        text: "Can you repair my ceiling fan?",
        time: "2:14 PM",
      },
      {
        id: "3",
        sender: "worker",
        text: "I'll reach your location around 4 PM.",
        time: "2:30 PM",
      },
    ],
  },

  {
    id: "2",

    worker: {
      id: "102",
      name: "Ahmed Plumbing",
      profession: "Plumber",
    },

    lastMessage: "Booking confirmed successfully.",

    time: "Yesterday",

    unread: 0,

    messages: [
      {
        id: "1",
        sender: "worker",
        text: "Booking confirmed successfully.",
        time: "11:45 AM",
      },
    ],
  },

  {
    id: "3",

    worker: {
      id: "103",
      name: "Bilal AC Repair",
      profession: "AC Technician",
    },

    lastMessage: "Thank you for choosing us.",

    time: "Monday",

    unread: 0,

    messages: [
      {
        id: "1",
        sender: "worker",
        text: "Thank you for choosing us.",
        time: "9:15 AM",
      },
    ],
  },
];

export default messagesData;
