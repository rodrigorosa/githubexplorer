import api from 'services/api';

function addFavorite(repository) {
  return {
    type: 'ADD_FAVORITE',
    payload: {
      repository,
    },
  };
}

export function searchAndAddRepository(repositoryName) {
  return async (dispatch) => {
    const response = await api.get(`/respos/${repositoryName}`);
    dispatch(addFavorite(response.data));
  };
}
