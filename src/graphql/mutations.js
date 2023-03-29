/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIot = /* GraphQL */ `
  mutation CreateIot(
    $input: CreateIotInput!
    $condition: ModelIotConditionInput
  ) {
    createIot(input: $input, condition: $condition) {
      id
      seal
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const updateIot = /* GraphQL */ `
  mutation UpdateIot(
    $input: UpdateIotInput!
    $condition: ModelIotConditionInput
  ) {
    updateIot(input: $input, condition: $condition) {
      id
      seal
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const deleteIot = /* GraphQL */ `
  mutation DeleteIot(
    $input: DeleteIotInput!
    $condition: ModelIotConditionInput
  ) {
    deleteIot(input: $input, condition: $condition) {
      id
      seal
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
