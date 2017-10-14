import React from 'react';

import { Container, Item } from 'semantic-ui-react';

// import Blogs from './Blogs';
import BlogItem from './BlogItem';

// const Blog = new Blogs();

const blogs = [
    {
      imgSrc: 'images/blogs/Understanding-Promises.png',
      header: 'Understanding Promises',
      date: '10.10.2017',
      description: 'At Codementor, we’ve used React + Redux to build several projects. There are projects made entirely with Redux, and there are projects where we’ve used Redux along with an existing Fluxxor project.',
      tags: ['Programming', 'JavaScript', 'ES7', 'ECMAScript 2016']
    },
    {
      imgSrc: 'images/blogs/React-Router-v4.png',
      header: 'React Router v4',
      date: '09.10.2017',
      description: 'I met Michael Jackson for the first time at React Rally 2016, soon after writing an article on React Router 3. Michael is one of the principal authors of React Router along with Ryan Florence.',
      tags: ['Programming', 'React']
    },
    {
      imgSrc: 'images/blogs/React-v16.png',
      header: 'React v16',
      date: '21.08.2017',
      description: 'If you have a React 15.5 app which doesn’t use deprecated features and doesn’t throw errors, then React 16 just works! Of course, “it just works” doesn’t make for a very interesting story. So lucky for you, it didn’t just work for me.',
      tags: ['Programming', 'React']
    },
    {
      imgSrc: 'images/blogs/React-Redux.png',
      header: 'React Redux',
      date: '07.05.2017',
      description: 'At Codementor, we’ve used React + Redux to build several projects. There are projects made entirely with Redux, and there are projects where we’ve used Redux along with an existing Fluxxor project.',
      tags: ['Programming', 'React']
    },
  ]

const BlogView = () => (
    <Container style={{ marginBottom: '3em' }}>
        <Item.Group style={{ width: '680px' }} divided>
        {blogs.map((blog, index) => (
            <BlogItem
                key={ index }
                imgSrc={ blog.imgSrc }
                header={ blog.header }
                date={ blog.date }
                description={ blog.description }
                tags={ blog.tags }
            />
            )
        )}
        </Item.Group>
    </Container>
)

export default BlogView;