import React from 'react';

import { Paper } from '@material-ui/core';
import BlogPost from './BlogPost';

const App = () => {
    return (
        <>
            <Paper elevation={3}>
                <BlogPost />
            </Paper>
            <br></br>
            <Paper elevation={3}>
                <BlogPost />
            </Paper>
        </>
    )
}

export default App;