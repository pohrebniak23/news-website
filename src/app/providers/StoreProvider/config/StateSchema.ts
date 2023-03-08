import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import {
  AddNewCommentSchema,
  ArticleDetailsCommentsSchema,
} from 'features/ArticleDetailsComments';
import { ArticlePageRecomendationsSchema } from 'features/ArticlePageRecomendations';
import { ArticlesPageFiltersSchema } from 'features/ArticlesPageFilters';
import { LoginSchema } from 'features/AuthByUsername/models';
import { ProfileSchema } from 'features/EditableProfileCard/models/types/ProfileSchema';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  addNewComment?: AddNewCommentSchema;

  // Articles
  articlesPageFilters?: ArticlesPageFiltersSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articlePageRecomendations?: ArticlePageRecomendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
