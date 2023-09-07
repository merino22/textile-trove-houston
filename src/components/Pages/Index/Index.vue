<template>
  <div class="flex justify-center items-center flex-col font-serif">
    <div
      class="w-full h-screen bg-second bg-cover bg-center"
    >
      <div class="w-full h-full flex justify-left items-center backdrop-brightness-50">
        <div class="text-white lg:text-left lg:pl-20 lg:w-4/6 md:text-center md:px-5 text-center px-3">
          <h1 class="lg:text-7xl text-5xl">Bales of Clothes in <br /> Houston</h1>
          <p class="lg:text-2xl lg:pt-8 md:pt-4 md:text-xl text-lg">PKS in Houston, Texas is your go-to place for all your clothing needs. We specialize in offering a wide selection of high-quality jeans in large quantities, catering to resellers, retailers, and businesses looking to stock up on denim essentials.</p>
          <div class="pt-8">
            <a class="bg-gray-3 p-4 text-xl text-white hover:bg-zinc-200 hover:text-black transition duration-500 rounded" href="#contact-us">Contact</a>
          </div>
        </div>
      </div>
    </div>
    <Notification 
      :message="notificationMessage" 
      type="success"
      v-if="showNotification"
      />
    <div id="testimonial" class="bg-zinc-900">
      <p class="lg:px-48 lg:pt-20 lg:text-3xl md:px-20 md:pt-8 md:text-lg px-10 pt-6 text-white text-center">
        I recently got some amazing clothing from PKS in Houston and I couldn't be happier
        with my purchase. Every item was perfect, and the staff was incredibly friendly and helpful.
        I highly recommend PKS for anyone looking for great quality clothes!
      </p>
      <p class="lg:px-48 lg:pb-20 lg:text-2xl md:px-20 md:pb-8 md:text-lg px-10 py-6 text-zinc-300 text-center italic">
        - Mary O'donell
      </p>
    </div>
    <div class="bg-gray-3">
      <p class="text-5xl py-5 text-center">Our Products</p>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 gap-8">
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
        <div class="pb-4">
          <img src="../../../assets/images/levistrauss.jpeg" alt="" />
          <p class="text-xl pt-2">Bale Of Levi Strauss Jeans</p>
        </div>
      </div>
      <div class="grid justify-items-center py-8">
        <a href="#contact-us" class="bg-zinc-900 p-4 text-xl rounded hover:bg-zinc-200 hover:text-zinc-900 transition duration-500">Contact Us for Product Info</a>
      </div>
    </div>
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 bg-zinc-800 w-full">
      <form ref="myForm" @submit.prevent="checkSubmit(name, email)">
        <div class="p-8">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 pb-5">
            <div class="grid grid-cols-1">
              <label for="email" :class="{ [`text-red-400`]: nameError }">Name <span v-if="nameError "> - {{ msg.name }}</span></label>
              <input v-model="name" maxlength="50" v-on:focus="validateNameField(name)" placeholder="Your Name*" name="name" type="text" class="bg-zinc-500 placeholder:text-gray-300 placeholder:italic"/>
            </div>
            <div class="grid grid-cols-1">
              <label for="email" :class="{ [`text-red-400`]: error }">E-mail <span v-if="error "> - {{ msg.email }}</span></label>
              <input v-model="email" name="email" type="text" v-on:focus="runEmailValidations(email)" class="bg-zinc-500 placeholder:italic placeholder:text-gray-300" placeholder="Your E-mail*" maxlength="50"/>
            </div>
          </div>
          <div class="grid grid-cols">
            <label for="message">Message</label>
            <textarea id="message" v-model="message" name="message" rows="5" class="bg-zinc-500 placeholder:italic placeholder:text-gray-300" placeholder="Type a message..." />
          </div>
          <div class="grid grid-cols pt-8">
            <input type="submit" value="Send" class="bg-zinc-900 text-lg p-3 cursor-pointer rounded hover:bg-zinc-300 hover:text-zinc-900 translate duration-500" />
          </div>
        </div>
      </form>
      <div id="contact-us" class="lg:text-left py-20 flex text-center">
        <div class="m-auto">
          <h2 class="text-5xl pb-5">Contact Us</h2>
          <p class="">Fill out the form below and we'll get back to you shortly!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  message: {
    type: String,
    required: true,
  },
  coursePrice: {
    type: Number,
    default: 200.00,
  },
})
</script>

<script>
import emailjs from '@emailjs/browser';
import Notification from '../../Notification.vue';

export default {
  data() {
    return {
      email: '',
      name: '',
      message: '',
      count: 100,
      surprise: 'This is a Surprise',
      emailError: '',
      nameError: '',
      error: false,
      nameError: false,
      msg: [],
      showNotification: false,
      notificationMessage: '',
      buttonDisabled: true,
    }
  },
  components: {
    Notification
  },
  watch:{
    email(value) {
      this.email = value;
      this.runEmailValidations(value);
    },
    name(value) {
      this.name = value;
      this.validateNameField(value);
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_f8x7s1s', 'template_nrvayeb', this.$refs.myForm, '4d3uDFK1Xwjpj_LSe')
        .then((result) => {
          console.log('SUCCESS!', result.text)
        }, (error) => {
          console.log('FAILED!', error.text)
        })
    },
    runEmailValidations(value) {
      this.validateEmail(value);
      this.validateEmailFormat(value);

      if (!this.error && !this.nameError) {
        return true;
      } 
      return false;
    },
    validateEmail(value) {
      if (value != '') {
        this.msg['email'] = ''
        this.error = false;
        return true;
      } else {
        this.msg['email'] = 'Email field is required';
        this.error = true;
        return false;
      }
    },
    validateEmailFormat(value) {
      if (/^[^@]+@\w+(\.\w+)+\w$/.test(value)) {
        this.msg['email'] = ''
        this.error = false;
      } else {
        this.msg['email'] = 'Invalid email format';
        this.error = true;
      }
    },
    validateNameField(value) {
      if (value != '') {
        this.msg['name'] = '';
        this.nameError = false;
        return true;
      } else {
        this.msg['name'] = 'Name field is required';
        this.nameError = true;
        return false;
      }
    },
    showSuccessNotification() {
        this.notificationMessage = 'Requested submitted!';
        this.showNotification = true;

        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
    },
    checkSubmit(name, email) {
      if (this.runEmailValidations(email) && this.validateNameField(name)) {
        this.sendEmail();
        this.showSuccessNotification();
        this.name = '';
        this.email = '';
        this.message = '';
        this.msg['email'] = '';
        this.msg['name'] = '';
      }
    },
  },
}
</script>
