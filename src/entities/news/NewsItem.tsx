import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';

interface NewsItemProps {
  id: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ id }: NewsItemProps) => {
  const { data, error, isLoading } = useGetStoryQuery(id);

  if (isLoading) {
    return (
      <Card variant="outlined" sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', marginBottom: '10px' }}>
        <CardContent>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="40%" />
        </CardContent>
      </Card>
    );
  }

  if (error || !data) return <div>Error loading story</div>;

  return (
    <Card variant="outlined" sx={{ backgroundColor: '#1a1a1a', border: '1px solid #333', marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: '#ffffff' }}>
          <Link to={`/news/${id}`} style={{ color: '#1da1f2', textDecoration: 'none' }}>
            {data.title}
          </Link>
        </Typography>
        <Typography color="textSecondary" sx={{ color: '#999999' }}>
          by {data.by} | {new Date(data.time * 1000).toLocaleDateString()} | {data.score} points
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
