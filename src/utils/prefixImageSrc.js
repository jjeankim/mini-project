

const prefixImageSrc = (html, domain) => {
  return html.replace(/<img\s+[^>]*src=["'](?!https?:\/\/)([^"']+)["']/gi, (match, src) => {
    return match.replace(src, `${domain}${src}`);
  });
}

export default prefixImageSrc
