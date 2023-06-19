import { useFormik } from 'formik'
import * as yup from 'yup';

export type FormBuildProps = {
    cep: string;
    road: string;
    houseNumber: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;
    payment: string;
}

export const validationSchema = yup.object<FormBuildProps>({
    cep: yup.string().required(),
    road: yup.string().required(),
    houseNumber: yup.string().required(),
    complement: yup.string().required(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    uf: yup.string().required(),
    payment: yup.string().required(),
})

export const formBuild = useFormik({
    initialValues: {
        cep: '',
        road: '',
        houseNumber: '',
        complement: '',
        neighborhood: '',
        city: '',
        uf: '', 
        payment: '',
    },
    validationSchema,
    onSubmit: () => {
        console.log('values')
    }
})