
import useSWR from 'swr';


// Definir el fetcher
export const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

// Hook personalizado para obtener todos los productos
export function useAllProducts() {
  const { data, error, isLoading } = useSWR('/api/products/all', fetcher);

  return {
    data,
    isLoading,
    error,
  };
}


export function useSearchProducts(query: string, limit: number) {
  const url = `/api/search?q=${query}&limit=${limit}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  
  return {
    data,
    error,
    isLoading,
  };
}


export function useOneProduct(productId:string) {
  const { data, error, isLoading } = useSWR(`/api/products/${productId}`, fetcher);

  return {
    data,
    isLoading,
    error,
  };
}
