import React, { useState } from 'react';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Button, Box, Typography } from '@mui/material';

interface CommentItemProps {
  id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ id }) => {
  const { data, error, isLoading } = useGetStoryQuery(id);
  const [showReplies, setShowReplies] = useState(false);

  if (isLoading) return <Typography>Loading comment...</Typography>;
  if (error || !data) return <Typography>Error loading comment</Typography>;

  return (
    <Box sx={{ marginLeft: '20px', marginTop: '10px', borderLeft: '1px solid #333', paddingLeft: '10px' }}>
      <Typography sx={{ color: '#ffffff' }}>
        <strong>{data.by}</strong>: {data.text}
      </Typography>
      {data.kids && (
        <>
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowReplies(!showReplies)}
            sx={{ marginTop: '10px', color: '#1da1f2', borderColor: '#1da1f2' }}
          >
            {showReplies ? 'Hide replies' : 'Show replies'}
          </Button>
          {showReplies && (
            <Box>
              {data.kids.map((childId: number) => (
                <CommentItem key={childId} id={childId} />
              ))}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default CommentItem;
