const sciAstraData = {
  mission:
    "The mission of SciAstra is to foster an ecosystem for research, development, and innovation in science and technology by providing access to cutting-edge tools, resources, and collaborative opportunities. The organization aims to empower a community of students, especially those from disadvantaged backgrounds, by promoting Science, Technology, Engineering, and Mathematics (STEM) education and research. SciAstra also focuses on fostering innovation through collaborations with organizations and institutions in the fields of science and technology.",

  WebStories: [
    {
      title: "Top 10 Indian Biology Institute",
      link: "https://www.sciastra.com/blog/web-stories/top-10-indian-biology-institute/",
    },
    {
      title: "NEST 2024 Exam: A Comprehensive Guide",
      link: "https://www.sciastra.com/blog/web-stories/nest-2024-exam-a-comprehensive-guide/",
    },
    {
      title: "Is 6 Months Enough for IAT/NEST 2024 Preparation?",
      link: "https://www.sciastra.com/blog/web-stories/is-6-months-enough-for-iat-nest-2024-preparation/",
    },
    // Add more web stories as needed
  ],

  sessionDetails:
    "\n➤ One to One live classes for you personally! \n➤ Top mentors from IISc, IISERs, IITs, NISER, etc \n➤ Customized study plan/schedule for you personally! \n➤ Face to Face doubt clearing classes \n➤ Private WhatsApp Group for all the support & help from mentors",

  collaborations: [
    "➤ SciAstra collaborates with various academic institutions and industry partners to conduct research, develop technologies, and promote STEM education.\n➤ SciAstra is a member of the International Alliance for Science, Technology, and Society (IASTE) and actively participates in its events and initiatives.",
    // Add more collaboration details
  ],

  publications: [
    {
      title: "AI-Driven STEM Education: A Comprehensive Guide",
      link: "publication-link-1",
    },
    {
      title: "Advancements in Quantum Computing: A Research Overview",
      link: "publication-link-2",
    },
    // Add more publications as needed
  ],

  courses:
    "SciAstra offers a diverse range of courses catering to various learning styles and interests within the vast realm of science and technology. Whether you're a high school student aspiring for competitive exams, a curious learner seeking knowledge, or a professional looking to upskill, SciAstra has something for you.",

  upcomingWebinars: [
    {
      title: "Future Trends in Artificial Intelligence",
      date: "March 5, 2023",
      link: "webinar-link-3",
    },
    {
      title: "Exploring Innovations in Big Data Analytics",
      date: "April 20, 2023",
      link: "webinar-link-4",
    },
    // Add more upcoming webinars
  ],
};

const chatbot = {
  responses: [
    "Hello! Welcome to SciAstra Chatbot. How can I help you today?",
    "Hi there! What brings you to SciAstra today?",
    "Greetings! I'm here to answer your questions about SciAstra. How can I assist you?",
    "Curious about SciAstra's mission? Ask me!",
    "Interested in upcoming web stories? I can provide details.",
    "Wondering about our personalized sessions? Let me give you more information.",
    "Discover SciAstra's collaborations with other organizations.",
    "Looking for publications or whitepapers? I've got you covered.",
    "Explore the diverse range of courses SciAstra offers. Let me guide you.",
    "What resources does SciAstra offer for students and researchers?",
  ],

  displayMessage: function (message, isUser) {
    const container = document.getElementById("chatbot-messages");
    const element = document.createElement("div");
    element.className = isUser ? "user-message" : "bot-message";
    element.innerText = message;
    container.appendChild(element);
  },

  sendMessage: function () {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
      this.displayMessage(`You: ${userInput}`, true);
      const response = this.getResponseBasedOnUserInput(userInput);
      this.displayMessage(`SciAstra Bot: ${response}`, false);

      // Scroll to the bottom of the chat container
      const chatContainer = document.getElementById("chatbot-messages");
      chatContainer.scrollTop = chatContainer.scrollHeight;

      document.getElementById("user-input").value = "";
    }
  },

  handleKeyPress: function (event) {
    if (event.key === "Enter") {
      this.sendMessage();
    }
  },

  getResponseBasedOnUserInput: function (userInput) {
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("mission")) {
      return sciAstraData.mission;
    } else if (lowerCaseInput.includes("web story")) {
      const webStories = sciAstraData.WebStories.map(
        (story) => story.title
      ).join(", ");
      return `Featured web stories: ${webStories}`;
    } else if (lowerCaseInput.includes("session")) {
      return sciAstraData.sessionDetails;
    } else if (lowerCaseInput.includes("collaboration")) {
      const collaborations = sciAstraData.collaborations.join(", ");
      return `SciAstra collaborates with: ${collaborations}`;
    } else if (lowerCaseInput.includes("publication")) {
      const publications = sciAstraData.publications
        .map((publication) => publication.title)
        .join(", ");
      return `Publications by SciAstra: ${publications}`;
    } else if (lowerCaseInput.includes("course")) {
      return sciAstraData.courses;
    } else {
      return "I'm sorry, I didn't understand that. Can you please be more specific?";
    }
  },

  init: function () {
    this.displayMessage(this.getRandomResponse(), false);
  },

  getRandomResponse: function () {
    return this.responses[Math.floor(Math.random() * this.responses.length)];
  },
};

document
  .getElementById("user-input")
  .addEventListener("keypress", function (event) {
    chatbot.handleKeyPress(event);
  });

chatbot.init();

function sendMessage() {
  chatbot.sendMessage();
}
