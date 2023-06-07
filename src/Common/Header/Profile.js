import React, { useEffect, useState } from "react";
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import OnlyNavbar from "./Navbar";
import './Profile.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import TransactionsRow from "components/Tables/TransactionsRow"


const Profile = () => {
  let profile_url =
    "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
  let valid_token = window.sessionStorage.getItem("token");
  let [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    profile_pic: "",
  });
  let [boughtt, setboughtt] = useState([]);

  let navigate = useNavigate();

  let handleLogout = () => {
    window.sessionStorage.clear()
    alert('logged out')
    navigate('/')

  }
  let bought = () => {
    return axios.get(' http://localhost:3005/bought').then(res => { setboughtt(res.data) }).catch(err => { console.log(err) })
  }
  useEffect(() => {
    axios
      .get(profile_url, {
        headers: {
          "x-access-token": valid_token,
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        // alert('done')
        console.log("data", res.data);
        if (res.data.status === 200) {
          let base_url = "https://wtsacademy.dedicateddevelopers.us/";
          let folder_path = "uploads/user/profile_pic/";
          let img_url = base_url + folder_path + res.data.data.profile_pic;

          setUser({
            ...user,
            first_name: res.data.data.first_name,
            last_name: res.data.data.last_name,
            email: res.data.data.email,
            profile_pic: img_url,
          });
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    bought();
  }, []);



  console.log(boughtt)
  return (
    <div>
      <OnlyNavbar />

      <section className="vh-100" style={{ backgroundColor: 'black' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" >
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ width: '', marginLeft: '' }}>
                    <MDBCardImage src={user.profile_pic}
                      alt="Avatar" className="my-5" style={{ width: '160px', height: '160px', borderRadius: '100px' }} fluid />
                    <MDBTypography style={{ paddingBottom: '25px' }} tag="h5">{user.first_name} {user.last_name}</MDBTypography>
                    <MDBBtn style={{ backgroundColor: 'gray' }} onClick={handleLogout}>Log Out</MDBBtn>
                  </MDBCol>
                  <MDBCol md="8" style={{ backgroundColor: 'black', color: '#1589FF' }}>
                    <MDBCardBody className="p-4" >
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBCol className="pt-1">
                        <MDBRow size="6" className="mb-3">
                          <MDBTypography tag="h6">First Name</MDBTypography>
                          <MDBCardText className="text-muted">{user.first_name}</MDBCardText>
                        </MDBRow>
                        <MDBRow size="6" className="mb-3">
                          <MDBTypography tag="h6">Last Name</MDBTypography>
                          <MDBCardText className="text-muted">{user.last_name}</MDBCardText>
                        </MDBRow>
                        <MDBRow size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{user.email}</MDBCardText>
                        </MDBRow>
                        <MDBRow size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBRow>
                        <MDBRow size="6" className="mb-3">
                          <Accordion style={{backgroundColor:'black'}}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography style={{color:'#1589FF',paddingLeft:75}}>No of Coins Bought</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{backgroundColor:'black', paddingLeft:15}}>
                              <Typography>
                              <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                              <TableHead style={{backgroundColor:'black' }}>
                                <TableRow >
                                  <TableCell style={{color:'white'}}>Name of Coin</TableCell>
                                  <TableCell align="right" style={{color:'white'}}>Coins</TableCell>
                                  <TableCell align="right" style={{color:'white'}}>Buying Price</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody style={{backgroundColor:'#1589FF' ,color:'black'}}>
                                {boughtt.map((row) => (
                                  <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  >
                                    <TableCell component="th" scope="row">
                                      {row.name}
                                    </TableCell>
                                    <TableCell align="right">{(row.boughtat/row.price)}</TableCell>
                                    <TableCell align="right">{(row.boughtat* 1).toFixed(2)}</TableCell>
                                    {/* <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell> */}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          

                          {/* {boughtt.map(x => (
                            <MDBCardText style={{ color: 'white' }}>{x.name}</MDBCardText>))} */}

                        </MDBRow>
                      </MDBCol>

                      {/* <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow> */}

                      {/* <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div> */}
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Profile;
