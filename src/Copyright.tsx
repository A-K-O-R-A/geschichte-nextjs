import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright '}
      <Typography
        component="a"
        href="/Dirkel.jpg"
        style={{ textDecoration: 'none', color: '#b8b8b8' }}
      >
        ©
      </Typography>{' '}
      Marvin Jacob / Florian Gellrich {new Date().getFullYear()}.
    </Typography>
  );
}
