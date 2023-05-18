import z from 'zod';

export interface CreateBrandInputDTO {
    id: string,
    name: string
}

export const CreateBrandSchema = z.object({
    id: z.string({
        invalid_type_error: "Id deve ser uma string", required_error: "Id é um campo obrigatório"
    }).min(1),
    name: z.string({
        invalid_type_error: "Name deve ser uma string", required_error: "Name é um campo obrigatório"
    }).min(3, "Os nomes precisam de pelo menos 3 caracteres")
}).transform(data => data as CreateBrandInputDTO)