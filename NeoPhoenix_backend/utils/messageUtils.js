export const createGoogleMapsLink = (location) => {
  return `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
};

export const formatEmergencyMessage = (userData, message, location) => {
  const googleMapsLink = createGoogleMapsLink(location);
  if (userData.userType === "Student") {
    return `
        EMERGENCY ALERT!
        Name: ${userData.name}
        Reg No: ${userData.regNo}
        Department: ${userData.dept}
        Mobile: ${userData.mobile}
        Emergency Contact: ${userData.emergencyContact}
        Message: ${message}
        Live Location: ${googleMapsLink}
      `;
  } else if (userData.userType === "Faculty") {
    return `
        EMERGENCY ALERT!
        Name: ${userData.name}
        Faculty ID: ${userData.facultyID}
        Department: ${userData.dept}
        Position: ${userData.position}
        Mobile: ${userData.mobile}
        Message: ${message}
        Live Location: ${googleMapsLink}
      `;
  } else {
    return `
        EMERGENCY ALERT!
        Name: ${userData.name}
        Age: ${userData.age}
        Address: ${userData.address}
        Aadhar: ${userData.aadhar}
        Mobile: ${userData.mobile}
        Message: ${message}
        Live Location: ${googleMapsLink}
      `;
  }
};
