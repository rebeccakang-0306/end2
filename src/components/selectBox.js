import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        left: '0px',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">Year</InputLabel>
                <Select
                    labelId="Year"
                    id="year"
                    value={year}
                    onChange={event =>{
                        setYear(event.target.value);
                    }}
                    input={<BootstrapInput />}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Month</InputLabel>
                <NativeSelect
                    id="month"
                    value={month}
                    onChange={event => {
                    setMonth(event.target.value);
                }}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>JAN</option>
                    <option value={2}>FEB</option>
                    <option value={3}>MAR</option>
                    <option value={4}>APR</option>
                    <option value={5}>MAY</option>
                    <option value={6}>JUN</option>
                    <option value={7}>JUL</option>
                    <option value={8}>AUG</option>
                    <option value={9}>SEP</option>
                    <option value={10}>OCT</option>
                    <option value={11}>NOV</option>
                    <option value={12}>DEC</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}
