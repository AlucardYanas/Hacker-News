import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import NestedCommentItem from './CommentItem';
import { Button, Box } from '@mui/material';

interface CommentItemProps {
  id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ id }: CommentItemProps) => {
  const { data, error, isLoading } = useGetStoryQuery(id);
  const [showReplies, setShowReplies] = useState(false);

  if (isLoading) return <div>Loading comment...</div>;
  
  if (error) {
    let errorMessage = 'Error loading comment';
    if (typeof error === 'object' && error !== null && 'status' in error) {
      const errorObj = error as { status?: number; data?: { message?: string } };
      errorMessage = errorObj?.data?.message || `Error: ${errorObj.status}`;
    }
    return <div>{errorMessage}</div>;
  }

  if (!data) return <div>Error loading comment</div>;

  const sanitizedText: string = DOMPurify.sanitize(data?.text ?? '')

  return (
    <Box
      sx={{
        marginLeft: '20px',
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #333',
        borderRadius: '4px',
        backgroundColor: '#1a1a1a',
      }}
    >
      <p><strong>{data.by}</strong>:</p>
      <div dangerouslySetInnerHTML={{ __html: sanitizedText }} />
      {data.kids && data.kids.length > 0 && (
        <>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => setShowReplies(!showReplies)} 
            sx={{ marginTop: '10px', color: '#1da1f2', borderColor: '#1da1f2' }}
          >
            {showReplies ? 'Hide replies' : `Show replies (${data.kids.length})`}
          </Button>
          {showReplies && (
            <div>
              {data.kids.map((childId: number) => (
                <NestedCommentItem key={childId} id={childId} />
              ))}
            </div>
          )}
        </>
      )}
    </Box>
  );
};

export default CommentItem;
