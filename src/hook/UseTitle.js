import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} Page`;
  }, [title]);
};

export default UseTitle;
