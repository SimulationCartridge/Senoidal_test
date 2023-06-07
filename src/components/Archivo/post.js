import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes guardar el post del blog en tu lógica de backend o en el estado global de tu aplicación

    // Redireccionar a la página de inicio o a la página del post creado
    history.push('/'); // Cambia la ruta a la que desees redirigir después de guardar el post
  };

  return (
    <div>
      <h1>Crear nuevo post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default BlogPostForm;