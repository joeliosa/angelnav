new Vue({
    el: '#app-vue',
    data() {
      return {
        coordinates: [],
        names: []
      }
    },
    methods: {
      fetchUsers() {  
        axios.get('https://discover.search.hereapi.com/v1/discover?at=52.5228,13.412&q=petrol+station&limit=5&lang=en-US&apiKey=ZVa8tOAMzIh_Wm5u8GGARwHxV12KfLFPUbGMNVul9xo')
          .then((response) => {
            const data = response.data; // [{}, {}]
            const transformeddata = data['items']
            for (var i = 0; i < transformeddata.length; i++) { 
              var entry = transformeddata[i]
              this.coordinates.push(entry['position'])
            }
            for (var i = 0; i < transformeddata.length; i++) { 
              var entry = transformeddata[i]
              this.names.push(entry['title'])
            }
            //for (var k = 0; i < transformeddata.length)
            //this.users = transformeddata;
          });
      },
    }
  });