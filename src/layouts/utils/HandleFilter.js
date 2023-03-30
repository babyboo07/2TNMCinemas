export const HandleSearchItemMovie = (item, formData) => {
  let conditions = true;

  if (formData.title) {
    conditions = conditions && item.titile.toLocaleLowerCase().includes(formData.title.toLocaleLowerCase());
  }

  if (formData.directorId > 0) {
    conditions = conditions && item.directorId === Number(formData.directorId);
  }

  if (formData.userId) {
    conditions = conditions && item.createById === formData.userId;
  }

  if (formData.releaseDate) {
    conditions = conditions && item.releaseDate === formData.releaseDate;
  }

  return conditions;
};
