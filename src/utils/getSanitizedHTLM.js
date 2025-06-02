import DOMPurify from "dompurify";

const getSanitizeHTML = (content) => {
  const sanitizeHTML = DOMPurify.sanitize(content);
  return sanitizeHTML;
};

export default getSanitizeHTML;
