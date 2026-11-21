import usePageTitle from '../usePageTitle.js'

export default function Introduction() {
  usePageTitle('Introduction')
  return (
    <main>
      <h2>Introduction</h2>
      <h6>Ethan "EP" Primak | Elegant Panda</h6>

      <figure>
        <img src="/images/selfie.jpg" alt="A random selfie" />
        <figcaption>Random selife of me</figcaption>
      </figure>

      <p>Hello, my name is Ethan and this is my first year here at UNCC. I am majoring in computer science with a concentration in cyber security. In my free time I enjoy hanging out with my friends and I also enjoy being active such as going to the gym.</p>

      <ul>
        <li><strong>Personal Background:</strong> I’m 21 and am from Charlotte, NC.</li>
        <li><strong>Professional Background:</strong> Currently unemployed focusing on school, trying to get an internship soon.</li>
        <li><strong>Academic Background:</strong> Associates in computer science, working towards bachelors degree.</li>
        <li><strong>Primary Work Computer:</strong> Lenovo laptop</li>
        <li><strong>Primary Work Location:</strong> My desk</li>
        <li><strong>Alternate Computer Location:</strong> Library</li>
        <li><strong>Courses I'm Taking & Why:</strong>
          <ol>
            <li><strong>ITSC 2600 - Computer Science Program, Identity, Career:</strong> Learn about getting a job in the tech world</li>
            <li><strong>ITIS 3135 - Front-End Web Application Development:</strong> Interested in how to develop websites</li>
            <li><strong>ITCS 3166 - Intro to Computer Networks:</strong> An interesting prerequisite class I am taking</li>
            <li><strong>ITSC 2181 - Introduction to Computer Systems:</strong> Also a prerequisite for me but also interesting</li>
            <li><strong>MATH 2164 - Matrices & Linear Algebra:</strong> A math class that I have to take.</li>
          </ol>
        </li>
      </ul>

      <blockquote>
        <p>"Life is like riding a bicycle. To keep your balance, you must keep moving."</p>
        <p>- Albert Einstein</p>
      </blockquote>
    </main>
  )
}
