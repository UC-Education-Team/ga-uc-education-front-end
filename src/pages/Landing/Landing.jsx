import * as React from "react";
import piggySvg from  "../images/piggy-bank.svg"
import barchart from  "../images/barchart.svg"
import DoughnutChart from './Doughnut'

import {
  Paper,
  Grid,
  styled,
} from "@mui/material";


import styles from './Landing.module.css'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));



const Landing = ({ user }) => {



  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'} you are on the landing page</h1>

      
      <Grid container spacing={8}>
      <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
                
           Training Progress  XX%  </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
                YTD Commission
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
                Goalsffg
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
                Circle Chart
                <DoughnutChart /> 
                
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
                
                <img className='' src={barchart} alt="" style={{ width: " 75.5%" }} />
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item sx={{ boxShadow: 4,
              textAlign: "center",}}>
               <img className='' src={piggySvg} alt="" style={{ width: "100%" }} />
                
    </Item>
  </Grid>
</Grid>
    


    </main>

    
  )
}

export default Landing
