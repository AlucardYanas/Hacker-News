import  { useEffect } from 'react';
import { useGetTopStoriesQuery } from '../../shared/api/hackerNewsApi';
import NewsItem from '../../entities/news/NewsItem';
import { Button, Container, Box, CircularProgress } from '@mui/material';

const NewsListPage = () => {
  const { data, error, isLoading, refetch } = useGetTopStoriesQuery();

  useEffect(() => {
    const interval = setInterval(refetch, 60000);
    return () => clearInterval(interval); 
  }, [refetch]);

  if (isLoading) return <Box display="flex" justifyContent="center"><CircularProgress /></Box>;
  if (error) return <div>Error loading news</div>;

  return (
    <Container>
      <Box display="flex" justifyContent="center" marginBottom="20px">
        <Button variant="contained" onClick={() => {
             void refetch()
          }}>
          Refresh News
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" gap={2}>
        {data?.slice(0, 100).map((id) => (
          <NewsItem key={id} id={id} />
        ))}
      </Box>
    </Container>
  );
};

export default NewsListPage;
