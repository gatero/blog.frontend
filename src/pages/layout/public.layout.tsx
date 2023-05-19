import Navbar from '@/components/layout/navbar';
import { LayoutProps } from '.';

export default function PublicLayout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
