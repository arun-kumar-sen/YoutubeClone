export function generateRandomName() {
  const firstNames = [
    "Arun",
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Sophia",
    "Ethan",
    "Ava",
    "Mason",
    "Isabella",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  return `${randomFirstName}`;
}

export function generateRandomMessage() {
  const messages = [
    "Hello, world!",
    "How are you doing today?",
    "JavaScript is fun!",
    "Keep up the great work!",
    "Success is on its way!",
    "Have a fantastic day!",
    "Believe in yourself!",
    "Coding is like magic!",
    "Stay positive and keep learning.",
    "You're doing amazing!",
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return randomMessage;
}
