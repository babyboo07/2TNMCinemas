export const CustomListCategory = (cates) => {
  const lstCateCustom = cates.map((x) => ({
    value: x.categoryId,
    label: x.categoryName,
  }));

  return lstCateCustom;
};
