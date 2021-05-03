const config = {
  screens: {
    Home: 'Home',
    Details: {
      path: 'details/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['ontrack://app'],
  config,
};

export default linking;
