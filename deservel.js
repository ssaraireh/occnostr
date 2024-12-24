  try {
    const response = await axios.post('https://api.example.com/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'https://example.com/callback',
    });
    const token = response.data.AUTH_TOKEN;
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};