import { create } from '@/fetch';

export default async function createProfile() {
  try {
    await create('/profile');
  } catch (error) {
    console.log(error);
  }
}
