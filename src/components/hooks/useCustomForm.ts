import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const useCustomForm = ({defaultValues, resolver}: {defaultValues: {[key: string]: any}, resolver: any}) => {

    const form = useForm<z.infer<typeof resolver>>(
        {
            mode:'onSubmit',
            resolver: zodResolver(resolver),
            defaultValues:defaultValues
        },
    )

  return form
}

export default useCustomForm