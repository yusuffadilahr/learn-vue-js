import * as Yup from 'yup'

export const registerValidationSchema = Yup.object().shape({
    fullname: Yup.string().required('Nama acara wajib diisi'),
    firstname: Yup.string().required('Nama acara wajib diisi'),
    lastname: Yup.string().required('Nama acara wajib diisi'),
    username: Yup.string().required('Nama acara wajib diisi'),
    password: Yup.string().required('Nama acara wajib diisi'),
    // confirmPassword: 
})