import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ( props ) => {
    const { children } = props
    const blogPosts = [
        { title: 'Blog Post #1' },
        { title: 'Blog Post #2' }
    ];

    return (
        <BlogContext.Provider 
            value={ blogPosts }
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;