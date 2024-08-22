import { createStore } from 'vuex'
import axios from 'axios'
import { toast }  from 'vue3-toastify'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import 'vue3-toastify/dist/index.css'

const apiURL = 'https://fullstack-project-ra29.onrender.com'
// Should you reload the page after logging in
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products : null,
    product : null,
    recentProducts: null,
    homeRecentProducts: null,
    addProducts: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) { 
      state.users = value
    },
    setUser(state, value) { 
      state.user = value
    },
    setProduct(state, value) { 
      state.product = value
    },
    setProducts(state, value) { 
      state.products = value
    },
    setRecentProducts(state, value) { 
      state.recentProducts = value
    },
    setHomeRecentProducts(state, value) {
      state.homeRecentProducts = value
    },
    setaddProducts(state, value) {
      state.addProducts = value
    }
  },
  actions: {
    // ==== Product =====
    async fetchProducts(context) {
      try {
        const res = await axios.get(`${apiURL}/products`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setProducts', results)
        } else {
          toast.error('Please try again later')  , { 
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })  
      }
    },
    async fetchProduct(context, id) {
      try {
        const res = await axios.get(`${apiURL}/products/${id}`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setProduct', results)
        } else {
          toast.error('Please try again later')  , { 
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })  
      }
    },
    async homeRecentProducts(context) {
      try {
        const res = await axios.get(`${apiURL}/products/homeRecent`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setHomeRecentProducts', results)
        } else {
          toast.error('Please try again later')  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000
          }  //Used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        // Toast is used to display an error message
        
      }
    },
    async recentProducts(context) {
      try {
        const res = await axios.get(`${apiURL}/products/recent`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    },
    async addProducts(context,info) {
      try {
        const results = (await axios.post(`${apiURL}/products`,info) ).data
        console.log(results);
        
        if(results) {
          context.commit('setProducts', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    },
    async editProducts(context,data) {
      
      try {
      let {id,info} =data
      // console.log(id, info);

        const results = (await axios.patch(`${apiURL}/products/${id}`, info) ).data
        console.log(results);
        
        if(results) {
          context.commit('setProducts', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }   
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        console.log(e);
        
      }
    },
    async deleteProduct(context,id) {
      try {
        const results = (await axios.delete(`${apiURL}/products/${id}`) ).data
        console.log(results);
        
        if(results) {
          context.commit('setProducts', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    },
    // ==== User =====
    async fetchUsers(context) {
      try {
        const res = await axios.get(`${apiURL}/users`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setUsers', results)
        } else {
          toast.error('Please try again later')  , { 
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })  
      }
    },
    async fetchUser(context, id) {
      try {
        const res = await axios.get(`${apiURL}/users/${id}`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setUser', results)
        } else {
          toast.error('Please try again later')  , { 
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })  
      }
    },
    async addUsers(context,info) {
      try {
        const results = (await axios.post(`${apiURL}/users/signup`,info) ).data
        console.log(results);
        
        if(results) {
          context.commit('setUsers', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    },
    async editUsers(context,data) {
      
      try {
      let {id,info} =data
      // console.log(id, info);

        const results = (await axios.patch(`${apiURL}/users/${id}`, info) ).data
        console.log(results);
        
        if(results) {
          context.commit('editUsers', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }   
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        console.log(e);
        
      }
    },
    async deleteUser(context,id) {
      try {
        const results = (await axios.delete(`${apiURL}/users/${id}`) ).data
        console.log(results);
        
        if(results) {
          context.commit('setUsers', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    }
  
  },
  
  modules: {
  }
})
