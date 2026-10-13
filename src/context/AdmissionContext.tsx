import React, { createContext, useContext, useState } from 'react';

interface AdmissionContextType {
  isOpen: boolean;
  selectedDepartment: string | null;
  openAdmission: (department?: string) => void;
  closeAdmission: () => void;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(undefined);

export const AdmissionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const openAdmission = (department?: string) => {
    setSelectedDepartment(department || null);
    setIsOpen(true);
  };

  const closeAdmission = () => {
    setIsOpen(false);
    setSelectedDepartment(null);
  };

  return (
    <AdmissionContext.Provider value={{ isOpen, selectedDepartment, openAdmission, closeAdmission }}>
      {children}
    </AdmissionContext.Provider>
  );
};

export const useAdmission = () => {
  const context = useContext(AdmissionContext);
  if (!context) {
    throw new Error('useAdmission must be used within an AdmissionProvider');
  }
  return context;
};
