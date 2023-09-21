import { Form , Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const bookmark = useLoaderData()

  return(
    <div>
        <h2>Create a Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="bookmark's title" />
        <input type="input" name="url" placeholder="bookmark's  url" />
        <input type="submit" value="Create  Bookmark " />
      </Form>

{bookmark.map(book => (
    <div key={book._id} className="">
      <Link to={`/${book._id}`}>
        <h1>{book.title}</h1>
      </Link >
      <Link>
        <h2>{book.url}</h2>
        </Link>
    </div>
  ))}
  </div>
  )
}

export default Index