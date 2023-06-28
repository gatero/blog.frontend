const URL = 'https://api.dev.daniel-ortega.mx';

const api = Object.freeze({
  create: async (path: string, request: any = null) => {
    try {
      const target = URL + path;

      const options: any = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('idToken'),
        },
      };

      if (request) {
        console.log('aaa - request: ', request);
        options.body = JSON.stringify(request);
      }

      const response = await fetch(target, options);

      return response;
    } catch (error) {
      console.log('aaa - error: ', error);
    }
  },

  find: async (path: string, params: any) => {
    try {
      const target = `${URL + path}?${new URLSearchParams(params)}`;
      const options: any = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('idToken'),
        },
      };

      const response = await fetch(target, options);

      return response;
    } catch (error) {
      console.log('aaa - error: ', error);
    }
  },

  findById: async (path: string) => {
    try {
      const target = URL + path;

      const options: any = {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('idToken'),
        },
      };

      const response = await fetch(target, options);

      return response;
    } catch (error) {
      console.log('aaa - error: ', error);
    }
  },

  updateById: async (path: string, request: any) => {
    try {
      const target = URL + path;

      const options: any = {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('idToken'),
        },
      };

      if (request) {
        options.body = request;
      }

      const response = await fetch(target, options);

      return response;
    } catch (error) {
      console.log('aaa - error: ', error);
    }
  },

  deleteById: async (path: string) => {
    try {
      const target = URL + path;
      const options: any = {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('idToken'),
        },
      };

      const response = await fetch(target, options);

      return response;
    } catch (error) {
      console.log('aaa - error: ', error);
    }
  },
});

export default api;
