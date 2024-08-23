<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" :id="'editUserModal'+user.userID" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editUserModalLabel">Edit User</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="editUserForm" name="editUserForm">
                        <div class="mb-3">
                          <label for="firstName" class="form-label">Firstname</label>
                          <input type="text" class="form-control" id="firstName" v-model="firstName">
                        </div>
                        <div class="mb-3">
                          <label for="lastName" class="form-label">Lastname</label>
                          <input type="text" class="form-control" id="lastName" v-model="lastName">
                        </div>
                        <div class="mb-3">
                          <label for="userAge" class="form-label">User Age</label>
                          <input type="text" class="form-control" id="userAge" v-model="userAge">
                        </div>
                        <div class="mb-3">
                          <label for="gender" class="form-label">Gender</label>
                          <input type="text" class="form-control" id="gender" v-model="gender">
                        </div>
                        <div class="mb-3">
                          <label for="userRole" class="form-label">User Role</label>
                          <input type="text" class="form-control" id="userRole" v-model="userRole">
                        </div>
                        <div class="mb-3">
                          <label for="emailAddress" class="form-label">Email Address</label>
                          <input type="text" class="form-control" id="emailAddress" v-model="emailAdd">
                        </div> 
                        <div class="mb-3">
                          <label for="userPass" class="form-label">User Password</label>
                          <input type="text" class="form-control" id="userPass" v-model="userPass" placeholder="Please enter password">
                        </div> 
                        <div class="mb-3">
                          <label for="userProfile" class="form-label">User Profile</label>
                          <input type="text" class="form-control" id="userProfile" v-model="userProfile">
                        </div> 
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="editUsers(user.userID)">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
name: 'EditUserModal',
props:['user'],

data() {
  return {
    
      firstName : this.user.firstName,
      lastName : this.user.lastName,
      userAge : this.user.userAge,
      gender : this.user.gender,
      userRole : this.user.userRole,
      emailAdd : this.user.emailAdd,
      userPass : '',
      userProfile : this.user.userProfile
    }
  
},

methods: {
  editUsers(id) {
   
    this.$store.dispatch('editUsers', { id: id, info: this.$data }).then(() => {
     
      const modal = Modal.getInstance(document.getElementById('editUserModal' + id));
      if (modal) {
        modal.hide();
      }
    }).catch((error) => {
      console.error("Error editing user:", error);
    });
  },
},


computed: {
        fetchUsers() {
      return this.$store.state.user
    } 
  },

  // mounted() {
  //   this.$store.dispatch('fetchProduct')
  // }

}
</script>

<style>
.close-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.close-button:hover, .save-button:hover, .admin-button:hover{
  transition: 2s;
  background-color: var(--awesome);
}

.save-button{
  background-color: var(--alternative);
  border: 1px solid var(--primary);
  border-radius: 0.5rem;
  width: 10rem;
  padding: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.form-label{
  display: flex;
}

.modal-footer{
  display: flex;
  justify-content: space-between;
}

@media (width < 999px)
{
  .modal-footer{
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.close-button{
  width: 96%;
}

.save-button{
  width: 96%;
}



}
</style>