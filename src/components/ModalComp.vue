<template>
     <div class="container-fluid">
      <div class="row">
        <!-- Modal -->
        <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="addProductModalLabel">Add New Product</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="addProductForm" name="addProductForm">
                        <div class="mb-3">
                          <label for="productName" class="form-label">Product Name</label>
                          <input type="text" class="form-control" id="productName" placeholder="Enter a product name" v-model="prodName">
                        </div>
                        <div class="mb-3">
                          <label for="Quantity" class="form-label">Quantity</label>
                          <input type="number" class="form-control" id="quantity" placeholder="Enter product quantity" v-model="quantity">
                        </div>
                        <div class="mb-3">
                          <label for="productAmount" class="form-label">Product Amount</label>
                          <input type="number" class="form-control" id="productAmount" placeholder="Enter your product amount" v-model="amount">
                        </div>
                        <div class="mb-3">
                          <label for="productCategory" class="form-label">Product Category</label>
                          <input type="text" class="form-control" id="productCategory" placeholder="Enter the product category" v-model="category">
                        </div>
                        <div class="mb-3">
                          <label for="productImage" class="form-label">Product ProdUrl</label>
                          <input type="text" class="form-control" id="productImage" placeholder="Enter the product image url" v-model="prodURL">
                        </div>
                        <div class="mb-3">
                          <label for="productDesc" class="form-label">Product Description</label>
                          <input type="text" class="form-control" id="productDesc" placeholder="Enter the product description" v-model="prodDescription">
                        </div> 
                      </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="close-button" data-bs-dismiss="modal">Close</button>
                <button type="button" class="save-button" @click="addProducts">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div> 
</template>

<script>
import Swal from 'sweetalert2'
import { Modal } from 'bootstrap'

export default {
name: 'ModalComp',

data() {
  return {
    prodName : '',
    quantity : '',
    amount : '',
    category : '',
    prodURL : '',
    prodDescription : ''
  }
},

computed: {
    isFormValid() {
      return this.prodName && this.quantity && this.amount && this.category && this.prodURL && this.prodDescription;
    }
  },

  methods: {
    addProducts() {
      if (this.isFormValid) {
        this.$store.dispatch('addProducts', this.$data).then(() => {
          const modal = Modal.getInstance(document.getElementById('addProductModal'));
          modal.hide();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all the fields",
        });
      }
    }
  }
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

/* @media (width < 290px)
{
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
  }
} */

</style>