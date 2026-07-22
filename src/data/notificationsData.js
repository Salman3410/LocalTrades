const notificationsData = [
  {
    id: "1",
    type: "booking",
    title: "Booking Confirmed",
    message: "Your booking with Ali Ahmed has been confirmed.",
    time: "2 min ago",
    read: false,
  },

  {
    id: "2",
    type: "message",
    title: "New Message",
    message: "Ali Ahmed sent you a new message.",
    time: "15 min ago",
    read: false,
  },

  {
    id: "3",
    type: "reminder",
    title: "Booking Reminder",
    message: "Your electrician will arrive tomorrow at 10:00 AM.",
    time: "1 hour ago",
    read: true,
  },

  {
    id: "4",
    type: "payment",
    title: "Payment Successful",
    message: "Rs. 1,200 payment completed successfully.",
    time: "Yesterday",
    read: true,
  },

  {
    id: "5",
    type: "offer",
    title: "Special Offer",
    message: "Get 20% OFF on Cleaning services this weekend.",
    time: "Yesterday",
    read: false,
  },

  {
    id: "6",
    type: "booking",
    title: "Worker Assigned",
    message: "Ahmed Khan has accepted your booking request.",
    time: "2 days ago",
    read: true,
  },
];

export default notificationsData;
