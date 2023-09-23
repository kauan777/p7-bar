import { gql } from "graphql-tag";

export const GET_CATEGORIES = gql`
  query Categories {
    categories(where: { isActive: true }) {
      id
      createdAt
      isActive
      image {
        url
      }
      label
    }
  }
`;
