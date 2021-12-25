// import { find, filter } from "lodash";
// import { find }from "lodash-es/find.js";
// import { filter } from "lodash-es/filter.js";
import _ from "lodash-es";

// example data
const authors = [
  { id: 1, firstName: "Tom", lastName: "Coleman" },
  { id: 2, firstName: "Sashko", lastName: "Stubailo" },
  { id: 3, firstName: "Mikhail", lastName: "Novikov" },
];

export const authorResolver = {
  Query: {
    author: (_, { id }) => find(authors, { id }),
  },

  Author: {
    posts: (author) => filter(posts, { authorId: author.id }),
  },
};
