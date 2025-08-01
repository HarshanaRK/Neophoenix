import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  Linking,
  Image,
} from "react-native";
import Navbar from "../components/Navbar";
import { Ionicons } from "@expo/vector-icons";
import { contactScreenStyles as styles } from "../styles/styles";
import CONFIG from "../config/config";

const makeCall = (number) => {
  Linking.openURL(`tel:${number}`);
};

export default function ContactScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [userContacts, setUserContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  // Save or Update Contact
  const handleSaveContact = () => {
    if (!newName.trim() || !newNumber.trim()) return;

    if (editingContact !== null) {
      const updatedContacts = userContacts.map((contact, index) =>
        index === editingContact
          ? { ...contact, name: newName, number: newNumber }
          : contact
      );
      setUserContacts(updatedContacts);
      setEditingContact(null);
    } else {
      setUserContacts([
        ...userContacts,
        {
          name: newName,
          number: newNumber,
          profilePic: "https://via.placeholder.com/40",
        }, // Default profile pic
      ]);
    }

    setNewName("");
    setNewNumber("");
    setModalVisible(false);
  };

  // Edit Contact
  const handleEditContact = (index) => {
    setNewName(userContacts[index].name);
    setNewNumber(userContacts[index].number);
    setEditingContact(index);
    setModalVisible(true);
  };

  // Delete Contact
  const handleDeleteContact = (index) => {
    const updatedContacts = [...userContacts];
    updatedContacts.splice(index, 1);
    setUserContacts(updatedContacts);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Navbar />
      <View style={styles.container}>
        <Text style={styles.header}>📞 Emergency Contacts</Text>

        {/* Default Contacts */}
        <FlatList
          data={CONFIG.defaultContacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => makeCall(item.number)}
            >
              <View style={styles.contactDetails}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.number}>{item.number}</Text>
              </View>
              <Ionicons name="call" size={24} color="#ff3b30" />
            </TouchableOpacity>
          )}
        />

        {/* User Contacts Section */}
        {userContacts.length > 0 && (
          <Text style={styles.subHeader}>📌 Your Contacts</Text>
        )}

        <FlatList
          data={userContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.contactItem}>
              <View style={styles.contactLeft}>
                <Image
                  source={{
                    uri: item.profilePic || "https://via.placeholder.com/40",
                  }} // Use default if no profilePic
                  style={styles.profilePic}
                />
                <View style={styles.contactDetails}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.number}>{item.number}</Text>
                </View>
              </View>
              <View style={styles.contactActions}>
                <TouchableOpacity onPress={() => handleEditContact(index)}>
                  <Ionicons name="create" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteContact(index)}>
                  <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />

        {/* Add Contact Button */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add-circle" size={40} color="#ff3b30" />
        </TouchableOpacity>
      </View>

      {/* Modal for Adding/Editing Contact */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editingContact !== null ? "Edit Contact" : "Add Contact"}
            </Text>

            <View style={styles.inputContainer}>
              <Ionicons
                name="person"
                size={20}
                color="#555"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={newName}
                onChangeText={setNewName}
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons
                name="call"
                size={20}
                color="#555"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={newNumber}
                onChangeText={setNewNumber}
                keyboardType="phone-pad"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.modalButtons}>
              <Pressable style={styles.saveButton} onPress={handleSaveContact}>
                <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
