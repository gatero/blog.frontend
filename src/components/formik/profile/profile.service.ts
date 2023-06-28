import api from '@/fetch';

const ProfileService = Object.freeze({
  async create(request?: any) {
    try {
      await api.create('/profile', request);
    } catch (error) {
      console.log(error);
    }
  },
  async find(params?: any) {
    try {
      await api.find('/profile', params);
    } catch (error) {
      console.log(error);
    }
  },
  async findById(id: string) {
    try {
      await api.findById(`/profile${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  async updateById(id: string, request: any) {
    try {
      await api.updateById(`/profile${id}`, request);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById(id: string) {
    try {
      await api.deleteById(`/profile${id}`);
    } catch (error) {
      console.log(error);
    }
  },
});

export default ProfileService;
