const ID_AUTHOUR = 400;
type Method = 'POST' | 'PUT' | 'GET' | 'DELETE';

export const client = async <T>({
  url,
  method = 'GET',
  body = {},
}: {
  url: string;
  method: Method;
  body?: object;
}) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorId: `${ID_AUTHOUR}`,
    },
    body: method === 'GET' ? undefined : JSON.stringify(body),
  });

  if (method === 'GET') {
    return (await response.json()) as T;
  }

  return await response.text();
};
