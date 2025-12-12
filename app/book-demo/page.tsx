"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import PageTitle from "@/components/page-title"
import { bookFormDefaultValues, bookFormSchema, BookFormSchemaType } from "@/utils/schema"
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { apiSendBookDemoEmail } from "@/lib/api/email"
import { useMutation } from "@tanstack/react-query"

const BookDemo = () => {
  const form = useForm<BookFormSchemaType>({
    resolver: zodResolver(bookFormSchema),
    values: bookFormDefaultValues,
    mode: "onSubmit",
  })
  const { control, handleSubmit } = form

  const mutation = useMutation({
    mutationFn: (data: BookFormSchemaType) => apiSendBookDemoEmail(data),
    onSuccess: () => {
      alert("Your demo request has been sent successfully!")
      form.reset()
    },
    onError: () => {
      alert("There was an error sending your request. Please try again later.")
    },
  })

  const onSubmit = (data: BookFormSchemaType) => {
    console.log("Form Data:", data)
    mutation.mutate(data)
  }

  return (
    <div>
      <PageTitle title="*BOOK* *DEMO*" />
      <div className="relative">
        <img
          src="/bookdemo_main.png"
          alt="Main Image"
          width={1440}
          height={705}
          className="w-full h-152 object-cover object-[10%]"
        />
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 tracking-tight text-white text-[55px] w-225 leading-15 flex flex-col items-center">
          <div className="font-light text-right w-full uppercase">DON&apos;T HESITATE TO EXPERIENCE -</div>
          <div className="text-center flex items-center justify-start w-full">
            <span className="bg-main-text-gradient font-medium px-2 uppercase ">BOOK A DEMO WITH US NOW !</span>
          </div>
        </div>
      </div>
      <div
        className="pb-22.5 pt-19 flex flex-col items-center gap-2.5 overflow-hidden"
        style={{
          background: `
            linear-gradient(180deg, rgba(4, 1, 1, 0.8) 100%, rgba(0, 0, 0, 0.8) 0%),
            url('/background/bk05.png') no-repeat center center / cover
          `,
        }}
      >
        <FormProvider {...form}>
          <form className="flex flex-col gap-10 items-center w-3/4">
            <FormField
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light gap-1">
                    <span className="text-red">*</span>
                    NAME
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="company_name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light">
                    COMPANY NAME
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company Name"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="country_region"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light">
                    COUNTRY / REGION
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Country / Region"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="street_address"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light">
                    STREET ADDRESS
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Street Address"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="city"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light">
                    CITY
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phone"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light gap-1">
                    <span className="text-red">*</span>
                    PHONE
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light gap-1">
                    <span className="text-red">*</span>
                    EMAIL ADDRESS
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      className="h-15 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="requirements"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="px-5 w-full">
                  <FormLabel className="text-[26px] font-light gap-1">
                    <span className="text-red">*</span>
                    REQUIREMENTS
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="How do you want to use a drone solution?"
                      className="h-37.5 text-2xl! font-normal! bg-[#ADADAD1A]! rounded-sm! placeholder:text-[#FFFFFF40]!"
                      {...field}
                    />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="
                bg-[#24242499] border-gradient-card hover:bg-hover-btn hover:border-gradient-btn-top
                focus-visible:border-none focus-visible:ring-0
                text-white text-[26px] font-light
                p-5 mt-8 h-16.5 w-33
                rounded-none cursor-pointer
              "
              onClick={handleSubmit(onSubmit)}
              disabled={mutation.isPending}
            >
              SUBMIT
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default BookDemo
