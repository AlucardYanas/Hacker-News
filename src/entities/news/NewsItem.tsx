import React from 'react';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@mui/material';

interface NewsItemProps {
  id: number;
}

const NewsItem: React.FC<NewsItemProps> = ({ id }) => {
  const { data, error, isLoading } = useGetStoryQuery(id);

  if (isLoading) return <ListItem>Loading...</ListItem>;
  if (error || !data) return <ListItem>Error loading story</ListItem>;

  return (
    <ListItem>
      <ListItemText
        primary={<Link to={`/news/${id}`}>{data.title}</Link>}
        secondary={`by ${data.by} | ${new Date(data.time * 1000).toLocaleDateString()} | ${data.score} points`}
      />
    </ListItem>
  );
};

export default NewsItem;
