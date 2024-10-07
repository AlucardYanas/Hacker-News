import { useGetTopStoriesQuery } from '../../shared/api/hackerNewsApi';
import NewsItem from '../../entities/news/NewsItem';
import { Button, Container } from '@mui/material';

const NewsListPage = () => {
  const { data, error, isLoading, refetch } = useGetTopStoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news</div>;

  return (
    <Container>
      <Button variant="contained" onClick={refetch}>Refresh</Button>
      <ul>
        {data?.slice(0, 100).map((id) => (
          <NewsItem key={id} id={id} />
        ))}
      </ul>
    </Container>
  );
};

export default NewsListPage;
