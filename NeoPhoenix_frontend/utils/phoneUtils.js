// utils/phoneUtils.js

/**
 * Formats a phone number by removing non-numeric characters and
 * adding the default country code if necessary.
 */
export const formatPhoneNumber = (phone) => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, "");
  // Add the country code if missing (default to +91 for India)
  if (!phone.startsWith("+")) {
    return `+91${cleaned}`;
  }
  return phone;
};

/**
 * Validates a phone number against E.164 format.
 */
export const isValidPhone = (phone) => /^\+[1-9]\d{1,14}$/.test(phone);
