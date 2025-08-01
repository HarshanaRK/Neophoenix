import { isValidPhone } from "./phoneUtils";

export const isValidUserData = (data) => {
  if (data.userType === "Student") {
    return (
      data?.name &&
      data?.regNo &&
      data?.dept &&
      isValidPhone(data.mobile) &&
      isValidPhone(data.emergencyContact)
    );
  }
  if (data.userType === "Faculty") {
    return (
      data?.name &&
      data?.facultyID &&
      data?.dept &&
      data?.position &&
      isValidPhone(data.mobile)
    );
  }
};
