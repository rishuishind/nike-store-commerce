import { FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components'
import { heroapi, popularsales, toprateslaes, sneaker, highlight, story, footerAPI } from './data/data.js';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI} />
      </main>
    </>
  )
}

export default App
