import { toast } from 'react-toastify';

const useToast = () => {
  const success = (msg?: string) =>
    toast.success(msg ? msg : 'Sucesso', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

  const error = (msg?: string) =>
    toast.error(msg ? msg : 'Ocorreu um erro', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

  const warning = (msg?: string) =>
    toast.warning(msg ? msg : 'Aviso', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

  return { success, error, warning } as const;
};

export default useToast;
