const Meta = ({ title, description, locale = "en-US", project, page }) => {
  page.title = `${title} - ${project.name}`;
  page.description = description;
  page.locale = locale;

  return false;
};

export default Meta;
