'use server'

import { revalidatePath } from "next/cache"

export const revalidatePathCustom = (path) => {
    revalidatePath(path)
}