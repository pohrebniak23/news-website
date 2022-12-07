export interface AddNewCommentSchema {
  text: string;
  postId: string;
  userId: string;
  error?: string;
  isLoading: boolean;
}
