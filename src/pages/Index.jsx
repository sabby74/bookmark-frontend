import { Form, Link, useLoaderData } from "react-router-dom";
import React from "react";

function Index(props) {
  const bookmark = useLoaderData();

  return (
    <div className="wrapper">
      <div className="create">
        <h2>Create a Bookmark</h2>
        <Form action="/create" method="post">
          <input type="input" name="title" placeholder="bookmark's title" />
          <input type="input" name="url" placeholder="bookmark's  url" />
          <input type="submit" value="Create  Bookmark " />
        </Form>
      </div>
      <div className="container">
        {bookmark.map((book) => (
          <div key={book._id} className="">
            <Link to={`/${book._id}`}>
              <h1>{book.title}</h1>
            </Link>
            <Link>
              <h2>{book.url}</h2>
            </Link>
            <Form action={`/delete/${book._id}`} method="post">
          <button type="submit" value="Delete a Bookmark" >Delete Me!</button>
        </Form>
        <Link to={`/${book._id}/edit`}>
          <button type='submit'>
            Edit {book.title}
          </button>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
