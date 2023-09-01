'use client'

import Button from "@/app/components/UI/Button"
import { useUI } from "@/app/context/ui.context"
import { SafeProduct } from "@/app/types"
import { generateCartItemName } from "@/utils/generate-cart-item-name"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { MdDelete } from "react-icons/md"

const OrderInfo = () => {
  const { modalData, closeModal } = useUI()
  const router = useRouter()

  const handleDeleteOrder = async () => {
    try {
        axios.delete(`/api/order/${modalData.id}`)
          .then(() => {
            toast.success('Order deleted!');
            router.refresh();
            closeModal();
          })
          .catch(() => {
            toast.error('Something went wrong.');
          })
          .finally(() => {
          })
    } catch (error) {
        toast.error('Something went wrong.');
    }
  }

  return (
    <div className="order-info">
        <div className="order-info__header">
            Order - #{modalData.id.slice(0,5)}
        </div>
        <div className="order-info__content">
            <div className="orders-list">
                {modalData.cart.items.map((item: SafeProduct) => {
                    return (
                        <div className="orders-list__item">
                            <img src={item.images[0]} alt="" style={{width: '100px', height: '60px'}}/>
                            <div className="orders-list__item-info">
                                <div>{generateCartItemName(item.name!, item.options!)}</div>
                                <div>${item.salePrice ? item.salePrice : item.price}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="order-info__footer">
            <div>Total: ${modalData.cart.total}</div>
            <Button className="btn__danger" icon={MdDelete} size={'sm'} onClick={handleDeleteOrder} />
        </div>
    </div>
  )
}

export default OrderInfo