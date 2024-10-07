
import { useParams, Link } from 'react-router-dom';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Button, Container } from '@mui/material';
import CommentItem from '../../entities/comment/CommentItem'; 

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, refetch } = useGetStoryQuery(Number(id));

  const commentCount = data?.kids ? data.kids.length : 0;

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading story</div>;

  return (
    <Container>
      <h1>{data.title}</h1>
      <p>
        by {data.by} on {new Date(data.time * 1000).toLocaleDateString()}
      </p>
      <p>Score: {data.score}</p>
      <a href={data.url} target="_blank" rel="noopener noreferrer">
        Read the full story
      </a>

     
      <p>Comments: {commentCount}</p>

  
      <Button variant="contained" onClick={refetch} sx={{ margin: '10px 0' }}>
        Refresh Comments
      </Button>

      <div>
        {data.kids?.map((commentId: number) => (
          <CommentItem key={commentId} id={commentId} />
        ))}
      </div>

      <Button variant="contained" component={Link} to="/" sx={{ margin: '10px 0' }}>
        Back to news list
      </Button>
    </Container>
  );
};

export default NewsDetailPage;
