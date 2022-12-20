import React from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button
} from '@mui/material';
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { Email, Phone, Cake } from '@mui/icons-material';
import { Box, Container } from '@mui/system';
import { useEffect, useState } from "react";

const Profile = ({ name, surname, email, phone, birthdate }) => {

  const [userData, setUserData] = useState({});

    useEffect(() => {
    const fetchUserData = async () => {
      const authApi = new AuthenticationApi();
      const res = await authApi.getCurrentUser();
      console.log(res.data.currentUser);
      setUserData(res.data.currentUser);
    };
    fetchUserData();
  }, []);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Paper style={{ backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {userData.fullName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Email" secondary={userData.email} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText primary="Phone" secondary={userData.phone} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Cake />
              </ListItemIcon>
              <ListItemText primary="Birthdate" secondary={userData.birthDate} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={() => navigate(`/profileEdit`)}>
            Edit Profile
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default function ProfilePage() {
  return (
    <div>
      <Box
      sx={{
        alignItems: "center",
        mt: 10,
      }}
      >
        <Profile/>
      </Box>
    </div>
  );
}