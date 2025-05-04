<script setup lang="ts">
import InputCustom from '@/components/section/InputCustom.vue'
import ButtonCustom from '@/components/base/ButtonCustom.vue'
import { ref } from 'vue'
const form = ref({
    fullname: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    address: '',
    username: '',
    password: '',
})

const handleSubmit = () => {
    console.log('masuk')
    // console.log(form.value.fullname, '<<')
}

</script>

<template>
    <div class="w-full min-h-screen p-20 bg-red-200 gap-2 flex justify-center items-center">
        <div class="w-full rounded-l-xl min-h-[70vh] h-fit p-20 bg-white shadow-md border">
            <form @submit.prevent="handleSubmit" class="flex flex-col justify-center h-full
            w-full gap-3">
                <InputCustom caption="Full Name" type="text" name="fullname" />
                <InputCustom caption="First Name" type="text" name="firstname" />
                <InputCustom caption="Last Name" type="text" name="lastname" />
                <InputCustom caption="Username" type="text" name="username" />
                <InputCustom caption="Password" type="text" name="password" />
                <ButtonCustom>Registrasi</ButtonCustom>
                <div class="flex gap-1 justify-center">
                    <h1>Already have an Account?</h1>
                    <RouterLink to="/login">Login</RouterLink>
                </div>
            </form>
        </div>
        <div class="w-full rounded-r-xl h-[70vh] bg-white shadow-md border flex
        justify-center items-center">
            <img src="https://trumecs.com/timthumb?h=600&src=http://trumecs.com/public/image/artikel/63e3164ce8ba6.jpg"
                alt="">
        </div>
    </div>
</template>
