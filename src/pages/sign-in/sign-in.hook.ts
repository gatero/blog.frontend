import { create } from '@/fetch';

export default async function createProfile() {
  try {
    const createdProfile = await create('/profile', {});
    console.log('aaa - createdProfile: ', createdProfile);
  } catch (error) {
    console.log(error);
  }
}
