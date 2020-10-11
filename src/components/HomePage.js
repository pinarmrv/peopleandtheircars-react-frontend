import React, {Component, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import APIs from "../services/APIs";

const useStyles = makeStyles((theme) => ({

    paperTop: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:'#f1fffb',
        height: "100%",
    },
    list: {
        marginLeft: theme.spacing(10),
    },

}));

function HomePage() {
    const classes = useStyles();
    const [plateNumber, setPlateNumber] = React.useState("");
    const [pid, setPid] = React.useState();
    const [color, setColor] = React.useState();
    const [age, setAge] = React.useState();
    const [result, setResult] = React.useState();



    async function handlePlateNumber() {
            APIs.getCarDetailsByPlateNumber(plateNumber)
                .then(response => {
                setResult(response);
            });
        }

    async function handlePersonalID() {
        APIs.getCarDetailsByPersonalID(pid)
            .then(response => {
                setResult(response);
            });
    }

    async function handleColor() {
        APIs.getPeopleByColorCar(color)
            .then(response => {
            setResult(response);
        });
    }

    async function handleAge() {
        APIs.getPeopleOlderThanAge(age)
            .then(response => {
            setResult(response);
        });
    }

    async function handleInsurance() {
        APIs.getPeopleWithInsurance().then(response => {
            setResult(response);
        });
    }


    return (
        <div className={classes.paperTop}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <List className={classes.list}>
                            <ListItem>
                                <KeyboardArrowRightIcon/>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    Enter Plate Number to get to know car details (Ex. AZA8126)
                                    <TextField
                                        margin='dense'
                                        autoComplete="plateNumber"
                                        name="plateNumber"
                                        variant="standard"
                                        required
                                        id="plateNumber"
                                        autoFocus
                                        value={plateNumber}
                                        onChange={e => setPlateNumber(e.target.value)}
                                    />
                                    <Button id="ok" onClick={handlePlateNumber}> Ok </Button>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <KeyboardArrowRightIcon/>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    Enter Personal ID to get to know car details (Ex. 8)
                                    <TextField
                                        margin='dense'
                                        autoComplete="pid"
                                        name="pid"
                                        variant="standard"
                                        required
                                        id="pid"
                                        autoFocus
                                        value={pid}
                                        onChange={e => setPid(e.target.value)}
                                    />
                                    <Button id="ok2" onClick={handlePersonalID}> Ok </Button>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <KeyboardArrowRightIcon/>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    Enter color to get names of all persons having a car of that color (Ex. green, red, silver)
                                    <TextField
                                        margin='dense'
                                        autoComplete="color"
                                        name="color"
                                        variant="standard"
                                        required
                                        id="color"
                                        autoFocus
                                        value={color}
                                        onChange={e => setColor(e.target.value)}
                                    />
                                    <Button id="ok3" onClick={handleColor}> Ok </Button>
                                </Box>
                            </ListItem>
                            <ListItem>
                                <KeyboardArrowRightIcon/>
                                <Box display="flex" justifyContent="flex-end" m={1} p={1}>
                                    Enter number to get names of all the people who are older than that age (Ex. 25, 30)
                                    <TextField
                                        margin='dense'
                                        autoComplete="age"
                                        name="age"
                                        variant="standard"
                                        required
                                        id="age"
                                        autoFocus
                                        value={age}
                                        onChange={e => setAge(e.target.value)}
                                    />
                                    <Button id="ok4" onClick={handleAge}> Ok </Button>
                                </Box>
                            </ListItem>
                            <ListItem button onClick={handleInsurance}>
                                <KeyboardArrowRightIcon/>
                                Click to see people list who has have at least one of their cars insured
                            </ListItem>
                        </List>
                    </Paper>
                    <Divider orientation="vertical" flexItem />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        {JSON.stringify(result, undefined, 2)}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;