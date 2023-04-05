import { configureStore } from "@reduxjs/toolkit";
import { quoteSlice ,onchangeTag,addAlltags,changeBookMarkBtn} from "../slice/quoteSlice";
import { bookmarkSlice ,addBookmark,removeBookmark} from "../slice/BookmarkSlice";

const store=configureStore({
    reducer:{ quote:quoteSlice.reducer,bookmark:bookmarkSlice.reducer }
})


export {store,onchangeTag,addAlltags,addBookmark,removeBookmark,changeBookMarkBtn}
