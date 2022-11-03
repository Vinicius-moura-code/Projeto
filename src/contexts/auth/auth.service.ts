import useToast from '../../hooks/useToast';

const API_URL = import.meta.env.VITE_URL_API;

const loginApi = async (data: any) => {
  const { error } = useToast();
  var raw = JSON.stringify(data);
  let requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: raw,
    redirect: 'follow',
  };
  let object: any;
  await fetch(API_URL + 'api/Login', requestOptions)
    .then((response) => response.json())
    .then((result) => (object = result))
    .catch((err) => error());

  return object;
};

export default loginApi;
