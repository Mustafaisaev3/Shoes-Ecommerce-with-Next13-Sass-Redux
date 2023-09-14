
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';
import "../app/styles/global.scss";
// import ManagedDrawer from '@/app/components/common/drawer/managed-drawer';
// import ManagedDrawer from '@/app/components/common/drawer/managed-drawer';
import ManagedZoomModal from '@/app/components/common/zoomModal/managed-zoomModal';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { ManagedUIContext } from '@/app/context/ui.context';
import ToasterProvider from '@/providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import getProducts from './actions/getProducts';
import ConfirmationModal from './components/common/confirmationModal/ConfirmationModal';
import ManagedMobileMenu from './components/common/mobileMenu/managed-mobile-menu';

const ManagedDrawer = dynamic(
  () => import('@/app/components/common/drawer/managed-drawer'),
{ssr: false}
);
const ManagedModal = dynamic(
  () => import('@/app/components/common/modal/managed-modal'),
{ssr: false}
);


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body>
        <ManagedUIContext>
          <Navbar currentUser={currentUser} />
          {children}
          <Footer />
          <ManagedZoomModal />
          <ManagedModal user={currentUser} />
          <ManagedDrawer />
          <ManagedMobileMenu />
          <ConfirmationModal />
          <ToasterProvider />
        </ManagedUIContext>
      </body>
    </html>
  )
}
