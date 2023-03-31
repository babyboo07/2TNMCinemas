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


export const HandleSearchItemMember = (item, formData) => {
  let conditions = true;

  if (formData.email) {
    conditions = conditions && item.email.toLocaleLowerCase().includes(formData.email.toLocaleLowerCase());
  }

  if (formData.gender > 0) {
    conditions = conditions && item.gender === Number(formData.gender);
  }

  if (formData.roleId) {
    conditions = conditions && item?.roles[0]?.roleId === Number(formData.roleId);
  }

  return conditions;
};
