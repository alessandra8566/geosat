'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import PageTitle from '@/components/page-title'
import { bookFormDefaultValues, bookFormSchema, BookFormSchemaType } from '@/utils/schema'
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { apiSendBookDemoEmail } from '@/lib/api/email'
import { useMutation } from '@tanstack/react-query'

const BookDemo = () => {
  const form = useForm<BookFormSchemaType>({
    resolver: zodResolver(bookFormSchema),
    values: bookFormDefaultValues,
    mode: 'onSubmit',
  })
  const { control, handleSubmit } = form

  const mutation = useMutation({
    mutationFn: (data: BookFormSchemaType) => apiSendBookDemoEmail(data),
    onSuccess: () => {
      alert('Your demo request has been sent successfully!')
      form.reset()
    },
    onError: () => {
      alert('There was an error sending your request. Please try again later.')
    },
  })

  const onSubmit = (data: BookFormSchemaType) => {
    console.log('Form Data:', data)
    mutation.mutate(data)
  }

  return (
    <div>
      <PageTitle title="*BOOK* *DEMO*" />
      <div className="relative">
        <img src="/bookdemo_main.png" alt="Book Demo Main" width={1440} height={705} className="h-152 w-full object-cover object-[10%]" />
        <div className="absolute bottom-16 left-1/2 flex w-225 -translate-x-1/2 transform flex-col items-center text-[55px] leading-15 tracking-tight text-white">
          <div className="w-full text-right font-light uppercase">DON&apos;T HESITATE TO EXPERIENCE -</div>
          <div className="flex w-full items-center justify-start text-center">
            <span className="bg-main-text-gradient px-2 font-medium uppercase">BOOK A DEMO WITH US NOW !</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2.5 overflow-hidden pt-19 pb-22.5"
        style={{
          background: `
            linear-gradient(180deg, rgba(4, 1, 1, 0.8) 100%, rgba(0, 0, 0, 0.8) 0%),
            url('/background/bk05.png') no-repeat center center / cover
          `,
        }}
      >
        <FormProvider {...form}>
          <form className="flex w-3/4 flex-col items-center gap-10">
            <FormField
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="gap-1 text-[26px] font-light">
                    <span className="text-red">*</span> NAME
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Name" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="company_name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="text-[26px] font-light">COMPANY NAME</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="country_region"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="text-[26px] font-light">COUNTRY / REGION</FormLabel>
                  <FormControl>
                    <Input placeholder="Country / Region" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="street_address"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="text-[26px] font-light">STREET ADDRESS</FormLabel>
                  <FormControl>
                    <Input placeholder="Street Address" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="city"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="text-[26px] font-light">CITY</FormLabel>
                  <FormControl>
                    <Input placeholder="City" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="phone"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="gap-1 text-[26px] font-light">
                    <span className="text-red">*</span>
                    PHONE
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="gap-1 text-[26px] font-light">
                    <span className="text-red">*</span>
                    EMAIL ADDRESS
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" className="h-15 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="requirements"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="gap-1 text-[26px] font-light">
                    <span className="text-red">*</span>
                    REQUIREMENTS
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="How do you want to use a drone solution?" className="h-37.5 rounded-sm! bg-[#ADADAD1A]! text-2xl! font-normal! placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="border-gradient-card hover:bg-hover-btn hover:border-gradient-btn-top mt-8 h-16.5 w-33 cursor-pointer rounded-none bg-[#24242499] p-5 text-[26px] font-light text-white focus-visible:border-none focus-visible:ring-0"
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
