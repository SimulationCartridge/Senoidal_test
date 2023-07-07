import React from 'react';
import Welcome from '../Welcome/welcome';
import Footer from '../Footer/footer';
import BlogList from '../Blog/BlogList';

function Home() {

 
  return (
    <div>
      <section>
        <Welcome />
      </section>
      <section>
        <BlogList />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
