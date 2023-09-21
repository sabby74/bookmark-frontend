const URL = "https://bookmarked-7agt.onrender.com"

export const bookmarkLoader = async () => {
    console.log();
    const res = await fetch(URL + "/bookmarks")
    const bookmark = await res.json()
    return bookmark
  }


  export const showLoader = async ({ params }) => {
    console.log(params, "showLoader");
    const res = await fetch(URL + "/bookmarks/" + params.id);
    const bookmark = await res.json();
    return bookmark;
  };