new Vue({
    el: '#app-vue',
    data() {
      return {
        users: [],
      }
    },
    methods: {
      fetchUsers() {  
        axios.get('https://discover.search.hereapi.com/v1/discover?at=52.5228,13.412&q=petrol+station&limit=5&lang=en-US&apiKey=ZVa8tOAMzIh_Wm5u8GGARwHxV12KfLFPUbGMNVul9xo')
          .then((response) => {
            const data = response.data; // [{}, {}]
            this.users = data;
          });
      },
    }
  });