const CONFIG = {
  navigationIcons: {
    Home: "home",
    Contact: "call",
    Help: "book",
  },
  apiBaseUrl: "http://localhost:5000", // Base URL for APIs
  sosEndpoint: "/api/sos", // SOS API route
  timeout: 10000, // Increased timeout for better stability
  theme: "light",
  emergencyMessage: "Emergency! Please send help immediately.",

  emergencyData: [
    {
      label: "Medical",
      icon: "medical",
      iconPath: require("../assets/medical.png"),
    },
    { label: "Fire", icon: "fire", iconPath: require("../assets/fire.png") },
    {
      label: "Violence",
      icon: "violence",
      iconPath: require("../assets/violence.png"),
    },
    {
      label: "Disaster",
      icon: "disaster",
      iconPath: require("../assets/rescue.png"),
    }, // Fixed naming
  ],

  defaultContacts: [
    { id: "1", name: "🏥 Medical Assistance", number: "+91 98765 43210" },
    { id: "2", name: "👨‍⚕️ Chief Medical Officer", number: "+91 87654 32109" },
    { id: "3", name: "🛡️ Campus Security", number: "+91 76543 21098" },
    { id: "4", name: "🚔 Local Police Station", number: "+91 75432 19876" },
    { id: "5", name: "🔥 Fire Department", number: "101" },
    { id: "6", name: "🚑 Ambulance Service", number: "108" },
    { id: "7", name: "📞 Women Helpline", number: "1091" },
    { id: "8", name: "🆘 Emergency Helpline", number: "112" },
  ],
};

export default CONFIG;
