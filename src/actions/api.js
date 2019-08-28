import axios from 'axios';

export const getData = () => {
  return (dispatch) => {
    return axios.get('https://chicken-coop.p.rapidapi.com/games/the%20legend%20of%20zelda%20breath%20of%20the%20wild', {
      headers: {
        'x-rapidapi-host': 'chicken-coop.p.rapidapi.com',
        'x-rapidapi-key': 'cd52254321msh39e030fa095ce97p1e725cjsnbf07c7c7fe9f'
      },
      params: { platform: 'switch' }
    }).then(response => {
      dispatch({ type: 'DATA_LOADED', payload: response })
    }).catch(error => {
      console.error(error);
    });
  }
}