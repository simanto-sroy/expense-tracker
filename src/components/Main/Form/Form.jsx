import React, { useState, useContext } from 'react'
import { Grid, TextField, FormControl, MenuItem, Typography, Button, Select, InputLabel } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';


import { ExpenseTrackerContext } from '../../../context/context';
import formatDate from '../../../utils/formatDate';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import useStyles from './style';

const initialState = {
    type: 'Income',
    category: '',
    amount: '',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransactions } = useContext(ExpenseTrackerContext);

    const createTransactions = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        
        addTransactions(transaction)
        setFormData(initialState)
    }

    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid> 
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategory.map((c) => (
                            <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} label="Amount" fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} label="Date" fullWidth />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransactions}>Create</Button>
        </Grid>
    )
}

export default Form;
