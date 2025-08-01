import { StyleSheet } from "react-native";

export const footerStyles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: "#222",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export const navBarStyles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#b71c1c",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginHorizontal: 10,
  },
});

export const heroStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
  image: {
    width: 120,
    height: 120,
  },
});

export const formStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#ff3b30",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ff3b30",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export const homeScreenStyles = StyleSheet.create({
  cancelButton: {
    marginTop: 10, // Adjusted to be slightly below the SOS button but not too much
    padding: 6,
    backgroundColor: "#d9534f",
    borderRadius: 10,
    alignItems: "center",
    width: 140, // Slightly increased width for better touchability
  },

  cancelText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 35, // Slightly increased spacing
  },
  emergencyText: {
    fontSize: 24, // Increased for better visibility
    fontWeight: "bold",
    color: "#ff3b30",
    textAlign: "center",
  },
  subText: {
    fontSize: 16, // Increased for better readability
    color: "#555",
    textAlign: "center",
    marginTop: 6,
    paddingHorizontal: 15,
  },
  center: {
    alignItems: "center",
    marginVertical: 40, // Slightly increased spacing
  },
  sosButtonSmall: {
    width: 160, // Normal SOS button size
    height: 160,
    resizeMode: "contain",
  },
  sosButtonLarge: {
    width: 190, // Slightly larger when pressed
    height: 190,
    resizeMode: "contain",
  },
  emergencyOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly", // Evenly distributes icons
    alignItems: "center",
    paddingHorizontal: 5, // Minimum padding to maximize space
    paddingVertical: 10,
    width: "100%",
  },

  emergencyButton: {
    alignItems: "center",
  },
  emergencyImage: {
    width: 100, // Slightly bigger emergency icons
    height: 100,
    resizeMode: "contain",
  },
});
export const contactScreenStyles = {
  container: { flex: 1, padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff3b30",
    marginBottom: 15,
    textAlign: "center",
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
  },

  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#ff3b30",
    elevation: 3,
  },
  contactLeft: { flexDirection: "row", alignItems: "center" },
  contactDetails: { marginLeft: 10 },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  number: { fontSize: 16, color: "#555" },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },

  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#ff3b30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButton: {
    marginTop: 10, // Reduce the margin so it's slightly above
    padding: 10,
    backgroundColor: "#d9534f",
    borderRadius: 10,
    alignItems: "center",
    width: 120,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export const profileStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  closeText: {
    fontSize: 16,
    color: "#ff3b30",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
  },
  infoContainer: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    marginVertical: 3,
  },
  Button: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#ff3b30",
    borderRadius: 5,
  },
  ButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export const userTypeSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    fontWeight: "bold",
    color: "#ff3b30",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff3b30",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const generalSelectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff3b30",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#ff3b30",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
