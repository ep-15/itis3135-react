import usePageTitle from '../usePageTitle.js'

export default function About() {
  usePageTitle('About')
  return (
    <main>
      <h2>About</h2>
      <p>This site is the hub for my work in ITIS3135, Front End Web Application Development taught by Mr. von Briesen at UNC Charlotte. You may find additional information about this course at <a href="https://divonbriesen.github.io/teaching/itis3135/">the ITIS3135 course site</a>.</p>

      <p>The course relies on many tools, including:</p>
      <ul>
        <li>VS Code</li>
        <li>Emmet within VS Code</li>
        <li>SFTP via Filezilla</li>
        <li>Git via GitHub Desktop and GitHub.com</li>
        <li>Various Browser tools</li>
        <li>The Accumulus Validator</li>
      </ul>

      <p>Over the semester, I'll design and build several sites:</p>
      <ul>
        <li>A personal home portfolio</li>
        <li>This course site</li>
        <li>A design firm site representing a fictitious/aspirational design/consulting firm for the student and named after them</li>
        <li>A crappy page intended to do all the bad things, so as to avoid them anywhere else</li>
        <li>A whimsical product company</li>
        <li>A student/colleague/peer management tool</li>
        <li>A client project website</li>
      </ul>

      <figure>
        <img src="/images/panda.jpg" alt="A panda eating bamboo, which is also my mascot" />
        <figcaption>Elegant Panda, my course mascot</figcaption>
      </figure>
    </main>
  )
}
