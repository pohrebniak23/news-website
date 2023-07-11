// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { Article, ArticleTag } from 'entities/Article';
// import {
//   getFiltersBy,
//   getFiltersLimit,
//   getFiltersOrder,
//   getFiltersPageNum,
//   getFiltersTitle,
//   getFiltersType,
// } from '../../selectors/getArticlesPageFiltersSelector';

// interface FetchArticleListProps {
//   replace?: boolean;
// }

// export const fetchArticlesPageWithFilters = createAsyncThunk<
//   Article[],
//   FetchArticleListProps,
//   ThunkConfig<string>
// >('articles/fetchArticlesPageWithFilters', async (_, thunkAPI) => {
//   const { extra, rejectWithValue, getState } = thunkAPI;

//   const limit = getFiltersLimit(getState());
//   const page = getFiltersPageNum(getState());
//   const sort = getFiltersBy(getState());
//   const order = getFiltersOrder(getState());
//   const search = getFiltersTitle(getState());
//   const type = getFiltersType(getState());

//   try {
//     const response = await extra.api.get<Article[]>('/articles', {
//       params: {
//         _expand: 'user',
//         _page: page,
//         _limit: limit,
//         _sort: sort,
//         _order: order,
//         type: type === ArticleTag.ALL ? undefined : type,
//         q: search,
//       },
//     });

//     if (!response.data) {
//       throw new Error();
//     }

//     return response.data;
//   } catch (e) {
//     return rejectWithValue('Error');
//   }
// });
export {};
