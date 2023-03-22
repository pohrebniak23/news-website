import { CommentType } from 'entities/Comment';
import { newsApi } from 'shared/api/newsApi';

interface NewCommentData {
  userId: string;
  articleId: string;
  text: string;
}

const articleDetailsRecomendationsApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleComments: build.query<CommentType[], string>({
      query: (articleId) => ({
        url: '/comments',
        params: {
          articleId,
          _expand: 'user',
        },
      }),
    }),
    addNewComment: build.mutation<CommentType, NewCommentData>({
      query: ({ userId, articleId, text }) => ({
        url: '/comments',
        method: 'POST',
        body: {
          userId,
          articleId,
          text,
        },
      }),
    }),
  }),
});

export const useAddNewComment =
  articleDetailsRecomendationsApi.useAddNewCommentMutation;

export const useGetArticleComments =
  articleDetailsRecomendationsApi.useGetArticleCommentsQuery;
