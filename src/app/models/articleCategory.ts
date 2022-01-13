import { ListResponseModel } from "./response-models/listResponseModel";

export interface ArticleCategory extends ListResponseModel<ArticleCategory> {
  articleCategoryId: number;
  articleId: number;
  categoryId: number;
  isDeleted?: boolean,
  deletionTime?: Date
}
