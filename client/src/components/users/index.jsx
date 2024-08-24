import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';

const UserDetailsCard = (props) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 'flex-end', paddingLeft: '10px' }}>
        <Avatar
          alt="Remy Sharp"
          src="D:\Learnings\chatwithme\client\src\components\users\profile_user.jpg"
          sx={{ width: 56, height: 56 }}
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Stack spacing={0}>
            <Typography variant="p" fontWeight={600}>
              Live From Space
            </Typography>
            <Typography variant="subtitle" color="text.secondary">
              Mac Miller
            </Typography>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}

export default UserDetailsCard;