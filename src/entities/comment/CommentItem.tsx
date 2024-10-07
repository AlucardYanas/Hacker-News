import React, { useState } from 'react';
import { useGetStoryQuery } from '../../shared/api/hackerNewsApi';
import { Button } from '@mui/material';

interface CommentItemProps {
  id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ id }) => {
  const { data, error, isLoading } = useGetStoryQuery(id);
  const [showReplies, setShowReplies] = useState(false); // Для отображения вложенных комментариев

  if (isLoading) return <div>Loading comment...</div>;
  if (error || !data) return <div>Error loading comment</div>;

  return (
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>
      <p><strong>{data.by}</strong>: {data.text}</p>
      {data.kids && (
        <>
          {/* Кнопка для отображения/скрытия вложенных комментариев */}
          <Button
            variant="outlined"
            size="small"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Hide replies' : 'Show replies'}
          </Button>
          {showReplies && (
            <div>
              {data.kids.map((childId: number) => (
                <CommentItem key={childId} id={childId} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CommentItem;
