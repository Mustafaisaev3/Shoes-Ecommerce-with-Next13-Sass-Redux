import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { useUI } from "../context/ui.context";
import { ModalViewTypes } from "../context/ui.context";


import { SafeUser } from "@/app/types";

interface IUseFavorite {
  productId: string;
  currentUser?: SafeUser | null
}

const useFavorite = ({ productId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const { openModal, setModalView } = useUI()

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(productId);
  }, [currentUser, productId]);

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      setModalView(ModalViewTypes.LOGIN_VIEW)
      return openModal();
    }

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${productId}`);
      } else {
        request = () => axios.post(`/api/favorites/${productId}`);
      }

      await request();
      router.refresh();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, 
  [currentUser, hasFavorited, productId, router]);

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite;