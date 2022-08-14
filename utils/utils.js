export function phoneStyling(phone) {
  const value = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  const styledPhone = !value[2]
    ? value[1]
    : '(' + value[1] + ') ' + value[2] + (value[3] ? '-' + value[3] : '');
  return styledPhone;
}
