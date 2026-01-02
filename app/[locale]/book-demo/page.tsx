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
      <div className="relative flex justify-center overflow-hidden">
        <img src="/bookdemo_main.png" alt="Book Demo Main" width={1440} height={705} className="min-w-170 w-full" />
        <div className="absolute 2xl:bottom-[15%] bottom-[5%] left-1/10 2xl:left-1/2 flex 5xl:w-225 2xl:w-125 w-90 5xl:-translate-x-1/2 2xl:-translate-x-[43%] -translate-x-[5%] flex-col 2xl:items-center item-start title-b4 tracking-tight text-white">
          <div className="w-full text-left 2xl:text-right font-light uppercase px-2">DON&apos;T HESITATE TO EXPERIENCE -</div>
          <div className="flex w-full items-center justify-start text-center">
            <span className="bg-main-text-gradient px-2 font-medium uppercase">BOOK A DEMO WITH US NOW !</span>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2.5 overflow-hidden 5xl:pt-19 pt-12.5  pb-22.5 px-5 2xl:px-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(4, 1, 1, 0.8) 100%, rgba(0, 0, 0, 0.8) 0%),
            url('/background/bk05.png') no-repeat center center / cover
          `,
        }}
      >
        <FormProvider {...form}>
          <form className="flex 2xl:w-3/4 w-full flex-col items-center 5xl:gap-10 gap-5 ">
            <FormField
              control={control}
              name="name"
              render={({ field, fieldState: { error } }) => (
                <FormItem className="w-full px-5">
                  <FormLabel className="gap-1">
                    <span className="text-red">*</span>
                    <p className='title-e1'>NAME</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Name" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel>
                    <p className='title-e1'>COMPANY NAME</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel>
                    <p className='title-e1'>COUNTRY / REGION</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Country / Region" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel>
                    <p className='title-e1'>STREET ADDRESS</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Street Address" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel>
                    <p className='title-e1'>CITY</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="City" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel className="gap-1">
                    <span className="text-red">*</span>
                    <p className='title-e1'>PHONE</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Phone" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel className="gap-1">
                    <span className="text-red">*</span>
                    <p className='title-e1'>EMAIL ADDRESS</p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" className="5xl:h-15 h-11 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
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
                  <FormLabel className="gap-1">
                    <span className="text-red">*</span>
                    <p className='title-e1'>REQUIREMENTS</p>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="How do you want to use a drone solution?" className="h-37.5 rounded-sm! bg-[#ADADAD1A]! title-e1 placeholder:text-[#FFFFFF40]!" {...field} />
                  </FormControl>
                  {error && <p className="text-red text-sm">{error.message}</p>}
                </FormItem>
              )}
            />
            <Button
              type="button"
              className="border-gradient-card hover:bg-hover-btn hover:border-gradient-btn-top title-e1 mt-8 h-auto! cursor-pointer rounded-none bg-[#24242499] p-5! font-light text-white focus-visible:border-none focus-visible:ring-0"
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
