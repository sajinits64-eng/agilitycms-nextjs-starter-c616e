import MainTemplate from "./MainTemplate";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";

// Add all the new page components below
const allTemplates = [
  { name: "MainTemplate", template: MainTemplate },
  { name: "Home", template: Home },
  { name: "About", template: About },
  { name: "Contact", template: Contact },
  { name: "Services", template: Services },
];

export const getPageTemplate = (templateName: string) => {
  if (!templateName) return null;
  const obj = allTemplates.find(
    (m) => m.name.toLowerCase() === templateName.toLowerCase()
  );
  if (!obj) return null;
  return obj.template;
};
