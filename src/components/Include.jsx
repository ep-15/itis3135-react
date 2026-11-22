// Renders one of the shared HTML files in public/components/ (header.html, footer.html),
// the same way the original site's data-include did. The html argument is that file's text.
// Links in these files are normal links, so each page is a full page load, like the original site.
export default function Include({ file, html }) {
  return <div data-include={file} dangerouslySetInnerHTML={{ __html: html }} />
}
