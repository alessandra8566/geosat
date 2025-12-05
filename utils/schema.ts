import z from "zod";

export const bookFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company_name: z.string().optional(),
  country_region: z.string().optional(),
  street_address: z.string().optional(),
  city: z.string().optional(),
  phone: z.string().min(1, "Phone is required"),
  email: z.email(),
  requirements: z.string().min(1, "Please provide your requirements"),
})
export type BookFormSchemaType = z.infer<typeof bookFormSchema>;
export const bookFormDefaultValues: BookFormSchemaType = {
  name: "",
  company_name: "",
  country_region: "",
  street_address: "",
  city: "",
  phone: "",
  email: "",
  requirements: "",
};