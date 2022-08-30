const API_URL = 'https://api.chucknorris.io/jokes/random';

type Response = {
  'icon_url' : string,
  'id' : string,
  'url' : string,
  'value' : string
};

export const getFakeAnswers = async (): Promise<Response> => {
  try {
    const response = await fetch(`${API_URL}`, { method: 'GET' });

    return response.json();
  } catch(error) {
    throw error;
  }
}