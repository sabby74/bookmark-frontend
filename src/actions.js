import { redirect } from "react-router-dom"

const URL = "https://bookmarked-7agt.onrender.com"

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData()
  const newBookmark = {
    title: formData.get("title"),
    url: formData.get("url"),
  }
  // Send new bookmark to our API
  await fetch(URL + "/bookmarks", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBookmark),
  })
  // redirect to index
  return redirect("/")
}

export const deleteAction = async ({params}) => {
  await fetch(URL + '/bookmarks/' + params.id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  })

  return redirect("/")
}

export const updateAction = async ({ params, request }) => {
  const formData = await request.formData()
  console.log(updateAction);

  const bookmark = {
      title: formData.get('title'),
      url: formData.get('url'),
  };
  console.log(bookmark, ': Bookmark to be updated');

  await fetch(URL + '/bookmarks/' + params.id, {
      method: "put",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmark),
  })

  return redirect(`/${params.id}`)
};