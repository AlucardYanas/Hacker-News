import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h1" color="textPrimary">
        404
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Page not found
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ marginTop: '20px' }}
      >
        Go back to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
