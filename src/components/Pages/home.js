import React from 'react';
import Welcome from '../Welcome/welcome';
import Navigation from '../Navigation/navigation';
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