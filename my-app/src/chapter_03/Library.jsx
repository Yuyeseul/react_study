import React from 'react';
import Book from './Book';

function Library(props) {
  return (
    <div>
      <Book name="react 공부 1" numOfPage={300} />
      <Book name="react 공부 2 " numOfPage={400} />
      <Book name="react 공부 3 " numOfPage={500} />
    </div>
  );
}

export default Library;
