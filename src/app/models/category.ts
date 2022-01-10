export interface CategoryDto {
  categoryId: number;
  name: string;
  uploadDate?: Date;
  updateDate?: Date;
  isDeleted?: boolean,
  deletionTime?: Date
}
