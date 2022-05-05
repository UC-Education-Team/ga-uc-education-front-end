import * as React from "react";
import piggySvg from "../images/newpiggy.jpg";
import barchart from "../images/barchart.svg";
import DoughnutChart from "./Doughnut";

import { Paper, Grid, styled } from "@mui/material";

import styles from "./Landing.module.css";
import Group from "./Group.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div className={styles.HeaderArea}>
        <div><img src={Group} alt="logo" /></div>
        <div><h1 className={styles.title}>
        Hi, {user ? user.name : "friend"}!
      </h1></div>
        </div>
      

      <Grid container rowSpacing={2} spacing={8}>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
              fontSize: "1rem",
            }}
          >
           <h3>  Training Progress <span>80%</span></h3>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
            }}
          >
            <h3>YTD Commission</h3>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
            }}
          >
            <h3> Goals</h3>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
            }}
            className={styles.item}
          >
            Circle Chart
            <DoughnutChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
            }}
            className={styles.item}
          >
            <img
              className=""
              src={barchart}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{
              width: "30",
              textAlign: "center",
              background: "#FFFFFF",
              border: "1px solid black",
              boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderradius: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={styles.item}
          >
            <img
              className=""
              src={piggySvg}
              alt=""
              style={{ width: "60%", marginTop: "10%"}}
            />
          </Item>
        </Grid>
      </Grid>
    </main>
  );
};

export default Landing;
