export const createUser = (user) => {
  // Return action
  return {
    // Unique identifier
    type: 'CREATE_USER',
    // Payload
    user: user
  }
};