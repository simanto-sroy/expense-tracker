import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';
import useStyles from './style';

const App = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{ height: '100vh' }}>
            <Grid item xs={12} md={3} >
                <Details title="Income"/>
            </Grid>
            <Grid item xs={12} md={5}>
                <Main />
            </Grid>
            <Grid item xs={12} md={3}>
                <Details title="Expense"/>
            </Grid>
        </Grid>
    )
}

export default App;
