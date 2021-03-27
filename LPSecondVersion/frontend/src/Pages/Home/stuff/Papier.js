import React from 'react';
import styled from 'styled-components';

const Paper = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 0;
    width: 90%;
    height: calc(100vh/2);
    max-height: 80%;
    border-style: none;
    outline: none;
    border-radius: 8px;
    position: relative;
    margin-top: 0.2em;

    background-color: #ffff;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: var(--color-text);
    }

`;


export default function Papier({children}){
    return(
        <>
            <Paper>
                {children}
            </Paper>
        </>
    );
}













// import { makeStyles } from '@material-ui/core/styles';
// import { Paper, Grid } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(10),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));

// export default function Papier({children}, props){
//     const classes = useStyles();
//     return(
//         <div className={classes.root}>
//             <Grid container spacing={props.space}>
//                 <Grid item xs={props.xsize} sm={props.msize}>
//                     <Paper className={classes.paper}>
//                         {children}
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }