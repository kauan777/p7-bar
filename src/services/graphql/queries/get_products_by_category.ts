import { gql } from "graphql-tag";

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query ProductsByCategory($categoryId: ID!) {
    products(where: { isActive: true, category: { id: $categoryId } }) {
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
