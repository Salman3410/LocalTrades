const messagesData = [
  {
    id: "1",

    worker: {
      id: "101",
      name: "Ali Electric Services",
      profession: "Electrician",
      avatar: null,
    },

    lastMessage: "I can visit tomorrow at 4 PM",

    time: "2:30 PM",

    unread: 2,

    messages: [
      {
        id: "1",
        sender: "worker",
        text: "Hello, how can I help you?",
        time: "2:10 PM",
      },

      {
        id: "2",
        sender: "user",
        text: "I need fan repair service",
        time: "2:15 PM",
      },

      {
        id: "3",
        sender: "worker",
        text: "I can visit tomorrow at 4 PM",
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
      avatar: null,
    },

    lastMessage: "Your booking has been confirmed",

    time: "Yesterday",

    unread: 0,

    messages: [
      {
        id: "1",
        sender: "worker",
        text: "Your booking has been confirmed",
        time: "10:20 AM",
      },
    ],
  },
];

export default messagesData;
