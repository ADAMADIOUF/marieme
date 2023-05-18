import React,{useEffect} from 'react';

const Blog = () => {

useEffect(() => {
  window.scrollTo(0, 0)
})
  const blogs = [
    {
      id: 1,
      title: `L'art de la Parfumerie`,
      date: '10 juin 2023',
      image: './images/blog1.jpeg',
      excerpt: `Découvrez les secrets de l'art de la parfumerie et la création de fragrances exquises.`,
    },
    {
      id: 2,
      title: `Les Meilleurs Parfums pour l'Été`,
      date: '5 juillet 2023',
      image: './images/blog2.jpeg',
      excerpt: `Explorez les meilleurs parfums qui capturent l'essence de l'été et offrent un parfum rafraîchissant.`,
    },
  ]

  return (
    <div className='big-blog'>
      <div className='big-blog-container section-center'>
        {blogs.map((blog) => (
          <div key={blog.id} className='blog-item'>
            <img src={blog.image} alt={blog.title} className='blog-image' />
            <div className='blog-content'>
              <h2 className='blog-title'>{blog.title}</h2>
              <p className='blog-date'>{blog.date}</p>
              <p className='blog-excerpt'>{blog.excerpt}</p>
              <a href='#' className='blog-link'>
                Lire la suite
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;