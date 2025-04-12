// src/data/LanguageContext.jsx
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const translations = {
    EN: {
      home: "Home",
      about: "About",
      marketplace: "Marketplace",
      blog: "Blog",
      contact: "Contact",
      services: "Services",
      farmer: "Farmer",
      buyer: "Buyer",
      signup: "Sign up",
    },
    TWI: {
      home: "Fie",
      about: "Fa ho",
      marketplace: "Ɛyɛ gua",
      blog: "Nkyerɛaseɛ",
      contact: "Bɔ amaneɛ",
      services: "Asomdwee",
      farmer: "Ɔfuno",
      buyer: "Tɔfo",
      signup: "Kɔmu",
    },
    EWE: {
      home: "Ŋuti",
      about: "Metsɔ",
      marketplace: "Gbedodɔ me",
      blog: "Nutinya",
      contact: "Dzidzɔɖe",
      services: "Adzɔgbe",
      farmer: "Agbleɖome",
      buyer: "Tɔtsɔ",
      signup: "Le egɔme",
    },
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
