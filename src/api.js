const baseServerUrl = "https://nrg-frontend-task-api.herokuapp.com"
export default {
  getSlots: () => {
    return fetch(`${baseServerUrl}/timeslots`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .catch(error => console.error('Error:', error));
  },

  createAppointment: (params) => {
    return fetch(`${baseServerUrl}/appointments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
  },
}