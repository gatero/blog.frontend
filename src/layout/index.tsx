import {
  AUTH_ROUTES,
  PROFILE_ROUTES,
} from '@/components/firebase/firebase.constants';
import { useRouter } from 'next/router';
import AuthLayout from './auth.layout';
import ProfileLayout from './profile.layout';
import PublicLayout from './public.layout';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function useLayout() {
  const { route } = useRouter();

  const isAuthRoute = AUTH_ROUTES.includes(route);
  if (isAuthRoute) {
    return AuthLayout;
  }

  const isProfileRoute = PROFILE_ROUTES.includes(route);
  if (isProfileRoute) {
    return ProfileLayout;
  }

  return PublicLayout;
}
