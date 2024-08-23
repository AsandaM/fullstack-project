<template>
    <div class="container">
      <div class="row" id="admin">
        <div class="banner-overlay"></div>
        <div class="banner-image">
            <div class="banner-content">
            <h1 class="animate__animated animate__fadeInDown">Admin</h1>
            <button @click="scrollDown" class="scroll-btn animate__animated animate__fadeInUp">↓</button>
            </div> 
       </div>
      </div>
      <div class="row" id="admin-content">
        <h1 class="heading">Products Table</h1>
        <div class="adminButtons">
          <button class="admin-button" @click="sortByNameAsc">Sorting Alphabetically</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addProductModal">
          Add New Product
        </button>
        </div>
        <Modal />
        <div class="tableContainer">
              <table>
                <thead>
                 <th class="mobile-email">Product Name</th>
                 <th>Category</th>
                 <th>Image</th>
                 <th>Amount</th>
                 <th>Actions</th>
                </thead>
                <tbody v-if="fetchProducts">
                  <tr v-for="product in fetchProducts" :key="product.prodID">
                    <td>
                      {{ product.prodName }}
                    </td>
                    <td>
                      {{ product.category }}
                    </td>
                    <td>
                      <img :src="product.prodURL" :alt="product.prodName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td>
                      {{ product.amount }}
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" @click="fetchProduct(product.prodID)" data-bs-toggle="modal" :data-bs-target="'#editProductModal'+product.prodID"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteProduct(product.prodID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
                <div v-else>
                  <Spinner />
                </div>
             </table>
            </div>

            <div v-for="product in fetchProducts" :key="product.prodID">
           <!-- <template #input>
                  <input type="text" class="form-control" id="productName" :value="product.prodName">
            
                </template>  -->
              <EditModal :product='product'>
                
              </EditModal> 

            </div>

          
      </div>

      <!------------------------------- Users Table -------------------------------------------------->
      <div class="row" id="admin-content">
        <h1 class="heading">Users Table</h1>
        <div class="adminButtons">
          <button class="admin-button" @click="sortUserNameAsc">Sorting Alphabetically</button>
      
        <button type="button" class="admin-button" data-bs-toggle="modal" data-bs-target="#addUserModal">
          Add New User
        </button>
        </div>
        <Modal />
        <div class="tableContainer2">
              <table>
                <thead>
                 <th>Firstname</th>
                 <th>Lastname</th>
                 <th>Gender</th>
                 <th>User Profile</th>
                 <th class="mobile-email">Email Address</th>
                 <th>Actions</th>
                </thead>
                <tbody v-if="fetchUsers">
                  <tr v-for="user in fetchUsers" :key="user.userID">
                    <td>
                      {{ user.firstName }}
                    </td>
                    <td>
                      {{ user.lastName }}
                    </td>
                    <td>
                      {{ user.gender }}
                    </td>
                    <td>
                      <img :src="user.userProfile" :alt="user.firstName" loading="eager" class="img-fluid adminImages">
                    </td>
                    <td class="mobile-email">
                      {{ user.emailAdd }}
                    </td>
                    <td>
                      <div class="adminButtons">
                        <button class="table-button" data-bs-toggle="modal" :data-bs-target="'#editUserModal'+user.userID" @click="fetchUser(user.userID)"><i class="bi bi-pen-fill"></i></button>
                        <button class="table-button" @click="deleteUser(user.userID)"><i class="bi bi-trash-fill"></i></button>
                      </div>
                    </td>
                  </tr>
                   
                </tbody>
                <div v-else>
                  <Spinner />
                </div>
             </table>
            </div>
            <AddUserModal />

            <div v-for="user in fetchUsers" :key="user.userID">
              <EditUserModal :user='user'>
                
              </EditUserModal> 

            </div>

      </div>

    </div>

  </template>

<script>
import Modal from '@/components/ModalComp.vue';
import AddUserModal from '@/components/AddUserModal.vue';
import Spinner from '@/components/Spinner.vue'
import EditModal from '@/components/EditModal.vue';
import EditUserModal from '@/components/EditUserModal.vue';

export default {
name: 'AdminView',
components: {
        Modal,
        AddUserModal,
        Spinner,
        EditModal,
        EditUserModal
      },

      methods: {
        //products sorting
          sortByNameAsc(){
            this.$store.state.products.sort((a, b)=>{
              return a.prodName.localeCompare(b.prodName)
            })
          },

          scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    },
          //users sorting
          sortUserNameAsc(){
            this.$store.state.users.sort((a, b)=>{
              return a.firstName.localeCompare(b.firstName)
            })
          },
          deleteProduct(id){
          this.$store.dispatch('deleteProduct', id)
          },
          deleteUser(id){
          this.$store.dispatch('deleteUser', id)
          },
          fetchProduct(id) {
          this.$store.dispatch('fetchProduct', id)
        },
        fetchUser(id) {
         this.$store.dispatch('fetchUser', id)
        }
        },

      computed: {
        fetchProducts() {
      return this.$store.state.products
    } ,
    fetchUsers(){
      return this.$store.state.users
    }
  },

  mounted() {
    this.$store.dispatch('fetchProducts'),
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style scoped>
#admin{
  position: relative;
  z-index: 1;
}

.banner-image{
    background-image: url("https://leahbasson.github.io/MyImages/skincareWebsite/banner1.png");
    background-size: cover;
    background-position: center; 
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); 
    z-index: 1;
}

.banner-content{
  position: relative;
  z-index: 2;
  width: 44rem;
  margin: 15rem auto 15rem;
  font-family: "Poppins", sans-serif;
  color: var(--secondary);
}

.banner-content h3 {
    font-weight: 600;
    z-index: 2;
} 

.banner-content p{
    font-weight: 400;
    font-size: 1.2rem;
}

.adminButtons{
    width: 65%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
}

.admin-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 16rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

/* Table Styling*/
th, td{
    border: 1px solid black;
    padding: 0.6rem 2rem;
    margin: 0;
}

table{
  width: 63.5%;
  margin: auto;
  margin-top: 2rem;
}

.adminImages{
    width: 30%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
}

.btnEdit{
    padding: 0.5rem 2.1rem;
    background-color: var(--alternative);
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
}

.btnDelete{
    padding: 0.5rem 1.5rem;
    background-color: var(--alternative);
    color: var(--secondary);
    border: 1px solid var(--secondary);
    border-radius: 0.5rem;
}

#addProductForm #name_error,#category_error{
    display: none;
}

.heading{
  font-family: "Poppins", sans-serif;
  color: var(--primary);
  padding-top: 4rem;
}

.adminButtons{
 margin: auto;
}

.table-button{
  background-color: var(--alternative);
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
} 

.scroll-btn {
  width: 4rem;
  border-radius: 100%;
  background-color: var(--alternative);
  border: none;
  color: var(--primary);
  font-size: 24px;
  cursor: pointer;
  padding: 0.5rem;
  margin-top: 2rem;
}

.scroll-btn:hover {
  transition: 2s;
        background-color: var(--awesome);
}

@media (width < 999px)
{
  .heading{
    padding-top: 3rem;
 font-size: 1.8rem;
 padding-bottom: 3rem;
}

.scroll-btn {
    display: none;
  }


  img[alt="banner-img"]{
    width: 80%;
  }

  .banner-content{
    width: 100%;
    margin: 14rem auto 14rem;
  }

  .admin-button{
  width: 79%;
  margin: auto;
}

.adminButtons{
  display: flex;
  justify-content: center;
  flex-direction: column; 
  gap: 1rem;
  width: 100%;
}

.adminImages{
    width: 6rem;
}

table{
  width: 79%;
  margin: auto;
  margin-top: 2rem;
}

th, td{
    border: 1px solid black;
    padding: 0.6rem 0.8rem;
    margin: 0;
}

thead{
  display: none;
}

table, tbody, th, td, tr {
    display: block;
}

table {
    margin-bottom: 1.5rem;
}

thead tr {
    display: none;
}

tr {
    margin-bottom: 15px;
}

td {
    position: relative;
    padding-left: 50%;
    word-wrap: break-word;
}

td:before {
    position: absolute;
    top: 50%;
    left: 10px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    transform: translateY(-50%);
}

.mobile-email{
  word-wrap: break-word;
}

.word-wrap{
  word-wrap: break-word;
}
/* Products Table Mobile*/
.tableContainer td:nth-of-type(1):before { content: "Product Name"; }
.tableContainer td:nth-of-type(2):before { content: "Category"; }
.tableContainer td:nth-of-type(3):before { content: "Image"; }
.tableContainer td:nth-of-type(4):before { content: "Amount"; }
.tableContainer td:nth-of-type(5):before { content: "Actions"; }
.tableContainer .total-row td:before { content: ""; }
.tableContainer .total-row td:before { content: ""; }

/* Users Table Mobile */
.tableContainer2 td:nth-of-type(1):before { content: "Firstname"; }
.tableContainer2 td:nth-of-type(2):before { content: "Lastname"; }
.tableContainer2 td:nth-of-type(3):before { content: "Gender"; }
.tableContainer2 td:nth-of-type(4):before { content: "User Profile"; }
.tableContainer2 td:nth-of-type(5):before { content: "Email Address"; }
.tableContainer2 td:nth-of-type(6):before { content: "Actions"; }
.tableContainer2 .total-row td:before { content: ""; }
.tableContainer2 .total-row td:before { content: ""; }

}
</style>