import { useState } from 'react';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import NestedCommentItem from './CommentItem'; 
import { Button } from '@mui/material'; 

interface CommentItemProps {
  id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ id }: CommentItemProps) => {
  const { data, error, isLoading } = useGetStoryQuery(id);
  const [showReplies, setShowReplies] = useState(false);

  if (isLoading) return <div>Loading comment...</div>;
  if (error || !data) return <div>Error loading comment</div>;

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
      <p><strong>{data.by}</strong>: {data.text}</p>
      {data.kids && data.kids.length > 0 && (
        <>
          <Button 
            variant="outlined" 
            size="small" 
            onClick={() => setShowReplies(!showReplies)} 
            sx={{ marginTop: '10px', color: '#1da1f2', borderColor: '#1da1f2' }}  // Стилизация кнопки
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
    </div>
  );
};

export default CommentItem;
