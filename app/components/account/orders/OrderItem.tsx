'use client'

import Button from "../../UI/Button"
import { MdClose, MdDelete, MdInfo } from 'react-icons/md'
import { useUI } from "@/app/context/ui.context"
import { ModalViewTypes } from "@/app/context/ui.context";
import axios from "axios";
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { SafeOrder } from "@/app/types"


type OrderItemTypes = {
    data: SafeOrder
}

const OrderItem: React.FC<OrderItemTypes> = ({ data }) => {
  const { openModal, closeModal, setModalView, setModalData, openConfirmationModal } = useUI()
  const router = useRouter()

  const handleOrderInfiModal = () => {
    setModalData(data)
    setModalView(ModalViewTypes.ORDER_INFO_VIEW)
    return openModal()
  }

  const deleteOrder = async () => {
    try {
        axios.delete(`/api/order/${data.id}`)
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

  const handleDeleteOrder = () => {
    openConfirmationModal({question: `You want to delete the order: ${data.id}?`, action: deleteOrder})
  }

  return (
        <div className="order-item">
            <div className="order-item__header">
                <div>#{data.id.slice(0,5)}</div>
                <Button icon={MdClose} size={'sm'} />
            </div>
            <div className="order-item__content">
                <div>{data.customer_info.firstName} {data.customer_info.lustName}</div>
                <span>NEW</span>
            </div>
            <div className="order-item__footer">
                <div>{data.createdAt.toLocaleDateString()}</div>
                <div className="actions">
                    <Button className="btn__info" icon={MdInfo} size={'sm'} onClick={handleOrderInfiModal} />
                    <Button className="btn__danger" icon={MdDelete} size={'sm'} onClick={handleDeleteOrder}/>
                </div>
            </div>
        </div>
  )
}

export default OrderItem