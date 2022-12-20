import * as React from "react";
import AccountTable from "../../components/AccountTable/AccountTable";
import { Box, Container } from '@mui/system';
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { useEffect, useState } from "react";
export default function AccountsPage() {
  const [userData, setUserData] = useState({});

    useEffect(() => {
    const fetchUserData = async () => {
      const authApi = new AuthenticationApi();
      const res = await authApi.getAllUsers();
      console.log(res);
      setUserData(res.data);
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <Box
      sx={{
        alignItems: "center",
        mt: 10,
      }}
      >
        <AccountTable rows={userData.users}/>
      </Box>
    </div>
  );
}
