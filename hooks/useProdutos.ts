import { useState } from 'react';

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const buscarProdutos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.1.24:3000/produtos");
      const data = await res.json();
      setProdutos(data);
    } catch (err) {
      setErro(err);
    } finally {
      setLoading(false);
    }
  };

  return { produtos, buscarProdutos, loading, erro };
}