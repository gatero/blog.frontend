import * as api from '@/fetch';

const profileService = {
  async create() {
    try {
      await api.create('/profile');
    } catch (error) {
      console.log(error);
    }
  },
  async find() {
    try {
      await api.find('/profile', {});
    } catch (error) {
      console.log(error);
    }
  },
  async findById() {
    try {
      await api.findById('/profile');
    } catch (error) {
      console.log(error);
    }
  },
  async updateById() {
    try {
      await api.updateById('/profile', {});
    } catch (error) {
      console.log(error);
    }
  },
  async deleteById() {
    try {
      await api.deleteById('/profile');
    } catch (error) {
      console.log(error);
    }
  },
};

export default profileService;
