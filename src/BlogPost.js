import React from 'react';
import BlogPostDetails from './BlogPostDetails';
import ContentToDo from './ContentToDo';

import { Paper } from '@material-ui/core';
import toDoPic from './images/layout.PNG';
import youtubePic from './images/youtube.PNG';

const BlogPost = () => {
    return (
        <>
            <Paper elevation={3}>
                <BlogPostDetails 
                    title="YouTube API"
                    subheader="February 15, 2021"
                    image= {<img src={youtubePic} alt="youtubePic" width="50%" />}/>
            </Paper>
            <br></br>
            <Paper elevation={3}>
                <BlogPostDetails 
                    title="React To Do List"
                    subheader="February 13, 2021"
                    image={<img src={toDoPic} alt="toDoListPic" />}
                    summary="Simple To Do list created with React that uses localStorage."
                    content={<ContentToDo />}/>
            </Paper>
        </>
    );
}

export default BlogPost;