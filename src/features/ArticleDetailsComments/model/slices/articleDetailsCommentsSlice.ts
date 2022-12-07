import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { fetchCommentByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

export const getArticleDetailsComments =
  commentsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsComments || commentsAdapter.getInitialState(),
  );

const articleDetailsCommensSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
    addNewComment: (state, action: PayloadAction<any>) => {
      commentsAdapter.setOne(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentByArticleId.fulfilled,
        (state, action: PayloadAction<CommentType[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )
      .addCase(fetchCommentByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: ArticleDetailsCommentsReducer,
  actions: ArticleDetailsCommentsActions,
} = articleDetailsCommensSlice;
