import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query getMessages($from: String!) {
    getMessages(from: $from) {
      uuid
      to
      from
      content
      createdAt
      reactions {
        uuid
        content
      }
    }
  }
`;
