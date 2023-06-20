import React, { useState, useEffect } from 'react';
import Welcome from '../Welcome/welcome';
import Footer from '../Footer/footer';
import Posts from '../Posts/posts';
import {client} from '../../client'

function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    client.getEntries()
      .then((response) => {
        console.log(response);
        setArticles(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <section>
        <Welcome />
      </section>
      <section>
        <Posts posts={articles} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
