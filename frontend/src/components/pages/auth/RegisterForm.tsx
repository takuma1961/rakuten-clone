import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

interface Props {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" gutterBottom>
        ユーザー登録
      </Typography>

      <TextField
        margin="normal"
        required
        fullWidth
        label="ユーザー名"
        name="username"
      />

      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        label="パスワード"
        name="password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3 }}
      >
        登録
      </Button>
    </Box>
  );
};

export default RegisterForm;
