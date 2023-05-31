import { gql } from '@apollo/client';

export const UPLOAD_PICTURE = gql`
  mutation UploadFile($data: FileInput!) {
    uploadFile(data: $data)
  }
`;
