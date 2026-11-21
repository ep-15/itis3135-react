import usePageTitle from '../usePageTitle.js'

export default function Home() {
  usePageTitle('Home')
  return (
    <main>
      <h2>Home</h2>
      <p>Welcome to my ITIS3135 course home page. This is where all my work will be.</p>
      <figure>
        <img src="/images/panda.jpg" alt="A panda eating bamboo, which is also my mascot" />
        <figcaption>Elegant Panda, my course mascot</figcaption>
      </figure>
    </main>
  )
}
