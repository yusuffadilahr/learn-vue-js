<script setup lang="ts">
import ButtonCustom from '@/components/base/ButtonCustom.vue'

/*  <-- Section Component --> */
import TopLeftSection from '@/components/section/registersection/TopLeftSection.vue'
import InputCustom from '@/components/section/InputCustom.vue'

/*  <-- Action --> */
import { authRegister } from '@/services/action.ts'
import Swal from 'sweetalert2'

import { ref, reactive } from 'vue'
const form = reactive({
    fullname: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    username: '',
    password: '',
})

const handleSubmit = async () => {
    try {
        Swal.fire({
            title: 'Memproses...',
            text: 'Mohon tunggu sebentar',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })

        const result = await authRegister(form)
        Swal.close()

        if (result.data.error === false) {
            Swal.fire({
                title: 'Kerja Bagus!',
                text: result.data.message,
                icon: 'success',
                confirmButtonText: 'OK'
            })
        } else {
            throw { message: 'Ada kesalahan server', status: 500 }
        }
    } catch (error) {
        Swal.close()
        Swal.fire({
            title: 'Ada kesalahan!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
}

</script>

<template>
    <div class="w-full min-h-screen p-10 bg-neutral-50 flex justify-center items-stretch">
        <div class="w-full rounded-l-xl min-h-[70vh] h-fit px-20 py-10 bg-white shadow-md">
            <TopLeftSection />
            <form @submit.prevent="handleSubmit" class="flex flex-col justify-center h-full w-full gap-6">
                <InputCustom caption="Full Name" type="text" name="fullname" v-model="form.fullname"
                    placeholder="Masukkan nama lengkap" required />

                <InputCustom caption="First Name" type="text" name="firstname" v-model="form.firstname"
                    placeholder="Masukkan nama depan" required />

                <InputCustom caption="Last Name" type="text" name="lastname" v-model="form.lastname"
                    placeholder="Masukkan nama belakang" required />

                <InputCustom caption="Phone Number" type="text" name="phonenumber" v-model="form.phonenumber"
                    placeholder="Masukkan nomor telepon" required />

                <InputCustom caption="Address" type="text" name="address" v-model="form.address"
                    placeholder="Masukkan alamat" required />

                <InputCustom caption="Username" type="text" name="username" v-model="form.username"
                    placeholder="Masukkan nama pengguna" required />

                <InputCustom caption="Password" type="password" name="password" v-model="form.password"
                    placeholder="Masukkan kata sandi" required />

                <ButtonCustom type="submit" class="my-6 py-3">Registrasi</ButtonCustom>

                <div class="flex gap-1 justify-center">
                    <h1>Already have an Account?</h1>
                    <RouterLink to="/login">Login</RouterLink>
                </div>
            </form>

        </div>
        <div class="w-full rounded-r-xl min-h-[70vh] bg-blue-600 shadow-md">
            <h1>GancySHop</h1>
        </div>
    </div>
</template>
