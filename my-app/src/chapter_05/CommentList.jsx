import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '예슬',
    comment: '안녕하세요, react 공부중입니다.',
  },
  {
    name: '민지',
    comment: '댓글 component 만들기~',
  },
  {
    name: '은지',
    comment: 'hi',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
