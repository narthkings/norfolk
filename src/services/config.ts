export const configOptions = () => {
  if (typeof window === 'undefined') return true;

  if (!window.sessionStorage.getItem('admin')) return false;

  const accessToken = window.sessionStorage.getItem('admin');

  if (!!accessToken) {
    return accessToken;
  }
};
