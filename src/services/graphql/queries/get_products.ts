import { gql } from "graphql-tag";

export const GET_PRODUCTS = gql`
  query Products {
    products(where: { isActive: true }) {
      createdAt
      description
      id
      isActive
      price
      publishedAt
      title
      updatedAt
      category {
        id
        label
      }
      image {
        id
        url
      }
    }
  }
`;
