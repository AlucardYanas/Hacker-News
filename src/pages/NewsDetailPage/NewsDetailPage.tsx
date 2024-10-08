import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Button, Container, Card, CardContent, Typography, Box} from '@mui/material';
import CommentItem from '../../entities/comment/CommentItem';
import Loader from '../../shared/ui/Loader';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, refetch } = useGetStoryQuery(Number(id));

  const commentCount = data?.kids ? data.kids.length : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      void refetch();
    }, 60000);
    return () => clearInterval(interval);
  }, [refetch]);

  if (isLoading) {
    return <Loader />;
  }  
  if (error || !data) return <div>Error loading story</div>;

  return (
    <Container>
      <Card variant="outlined" sx={{ marginBottom: '20px', marginTop: '20px', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ color: '#ffffff' }}>
            {data.title}
          </Typography>
          <Typography color="textSecondary" sx={{ color: '#999999' }}>
            by {data.by} on {new Date(data.time * 1000).toLocaleDateString()}
          </Typography>
          <Typography color="textSecondary" sx={{ color: '#999999' }}>
            Score: {data.score}
          </Typography>
          <a href={data.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2' }}>
            Read the full story
          </a>
          <Typography color="textSecondary" sx={{ color: '#999999' }}>
            Comments: {commentCount}
          </Typography>
        </CardContent>
      </Card>

      <Box marginBottom="20px">
        <Button
          variant="contained"
          onClick={() => {
             void refetch()
          }}
          sx={{ backgroundColor: '#1da1f2' }}
        >
          Refresh Comments
        </Button>
      </Box>

      <Box>
        {data.kids?.map((commentId: number) => (
          <CommentItem key={commentId} id={commentId} />
        ))}
      </Box>

      <Box marginTop="20px">
        <Button variant="contained"  component={Link} to="/" sx={{ backgroundColor: '#1da1f2', marginBottom: '20px' }}>
          Back to news list
        </Button>
      </Box>
    </Container>
  );
};

export default NewsDetailPage;
