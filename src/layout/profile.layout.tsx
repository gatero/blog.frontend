import Navbar from '@/components/layout/navbar';
import { LayoutProps } from '.';

export default function ProfileLayout(props: LayoutProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
