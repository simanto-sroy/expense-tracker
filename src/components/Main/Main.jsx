import React, {useContext} from 'react';
import { Grid, Divider, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import { ExpenseTrackerContext } from '../../context/context';
import Form from './Form/Form';
import List from './List/List';
import useStyle from './style';

const Main = () => {
    const classes = useStyle();
    const {balance} = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance $ { balance }</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    Add Your Statement
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;
