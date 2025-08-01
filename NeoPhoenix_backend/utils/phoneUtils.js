export const isValidPhoneNumber = (phone) => {
  // Validate E.164 format
  return /^\+[1-9]\d{1,14}$/.test(phone);
};
