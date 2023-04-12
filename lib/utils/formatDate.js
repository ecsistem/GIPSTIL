import siteMetadata from '@/data/siteMetadata';
const formatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const newDate = new Date(date); // cria um novo objeto do tipo Date

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate() + 1;

  const now = new Date(year, month, day).toLocaleDateString(siteMetadata.locale, options);

  return now;
};

export default formatDate;
