import { createContext, useEffect, useState } from "react";

export const SelectionContext = createContext(null);

export const SelectionProvider = ({ children }) => {
  const [specialty, setSpecialty] = useState(() => {
    const saved = localStorage.getItem("specialty");
    return saved ? JSON.parse(saved) : null;
  });

  const [level, setLevel] = useState(() => {
    const saved = localStorage.getItem("level");
    return saved ? JSON.parse(saved) : null;
  });

  const [semester, setSemester] = useState(() => {
    const saved = localStorage.getItem("semester");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (specialty) localStorage.setItem("specialty", JSON.stringify(specialty));
  }, [specialty]);

  useEffect(() => {
    if (level) localStorage.setItem("level", JSON.stringify(level));
  }, [level]);

  useEffect(() => {
    if (semester) localStorage.setItem("semester", JSON.stringify(semester));
  }, [semester]);

  return (
    <SelectionContext.Provider
      value={{
        specialty,
        setSpecialty,
        level,
        setLevel,
        semester,
        setSemester,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
