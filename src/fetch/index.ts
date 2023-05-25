const URL = 'https://api.dev.daniel-ortega.mx';

export const create = async (path: string, request: any = null) => {
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
      options.body = request;
    }

    const response = await fetch(target, options);

    return response.json();
  } catch (error) {
    console.log('aaa - error: ', error);
  }
};

export const find = async (path: string, params: any) => {
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

    return response.json();
  } catch (error) {
    console.log('aaa - error: ', error);
  }
};

export const findById = async (path: string) => {
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

    return response.json();
  } catch (error) {
    console.log('aaa - error: ', error);
  }
};

export const updateById = async (path: string, request: any) => {
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

    return response.json();
  } catch (error) {
    console.log('aaa - error: ', error);
  }
};

export const deleteById = async (path: string) => {
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

    return response.json();
  } catch (error) {
    console.log('aaa - error: ', error);
  }
};
