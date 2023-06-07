import React from 'react';
import Navigation from '../Navigation/navigation';
import Welcome from '../Navigation/navigation'
import Footer from '../Footer/footer';




function Home() {
  return (
    <div>
    <nav>
      <Navigation />
      </nav>
      <section>
        <Welcome />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;