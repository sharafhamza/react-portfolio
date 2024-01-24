import React from "react";
import { FaPhone } from "react-icons/fa";
import ContactNumber from "./ContactNumber";
const ContactInfo = () => {
  return (
    <div className="flex gap-1 992:gap-3">
      <FaPhone className="text-white text-xl 992:text-26" />
      <ContactNumber />
    </div>
  );
};

export default ContactInfo;
