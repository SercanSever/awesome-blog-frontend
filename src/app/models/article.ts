export default interface ArticleDto {
  articleId: number,
  name: string,
  nameUrl: string,
  summary: string,
  content: string,
  author: string,
  commentId?: number,
  imageId?: number,
  uploadDate?: Date,
  updateDate?: Date,
  deletionDate?: Date,
  isDeleted: boolean
}
