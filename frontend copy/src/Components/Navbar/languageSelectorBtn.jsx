import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@chakra-ui/react";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </Select>
  );
}

export default LanguageSelector;
