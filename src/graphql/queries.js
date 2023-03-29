/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getIot = /* GraphQL */ `
  query GetIot($id: ID!) {
    getIot(id: $id) {
      id
      seal
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listIots = /* GraphQL */ `
  query ListIots(
    $filter: ModelIotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        seal
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
