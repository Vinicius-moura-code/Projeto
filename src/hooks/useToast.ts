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
  const logout = async () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    await toast.promise(resolveAfter3Sec, {
      pending: 'Saindo',
      success: 'Desconectado',
      error: 'rejected 🤯',
    });
  };

  const login = async () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );
    await toast.promise(resolveAfter3Sec, {
      pending: 'Entrando',
      success: 'Conectado',
      error: 'rejected 🤯',
    });
  };

  return { success, error, warning, logout, login } as const;
};

export default useToast;
