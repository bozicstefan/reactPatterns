import { useContext, createContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      "useAccordionItemContext must be used within an Accordion.Item"
    );
  }
  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
