import { createContext } from "react";

export const UtilsContext = createContext();

export const UtilsProvider = ({ children }) => {
  const formattedDate = (createdAt) => {
    return new Date(createdAt).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const formattedShortUrl = (shortUrl) => {
    return "https://alias.cyclic.app/redirect/" + shortUrl;
  };

  return (
    <UtilsContext.Provider value={{ formattedDate, formattedShortUrl }}>
      {children}
    </UtilsContext.Provider>
  );
};
