import { Button, Card, message } from "antd";
import { FastField } from "formik";
import { useEffect } from "react";
import { FormContainer } from "../../../components/form";
import { hoc } from "../../../utils/hoc";
import { MainInput } from "../../../components/main-input";
import { useResgisterProps } from "./register-props";


export const Register = hoc(useResgisterProps, ({ navigate}) => {
   
    
    return (
        <section
            className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-no-repeat bg-gradient-to-b from-[#CF8E2F] to-[#603310]">
            <Card className="shadow-2xl mb-10 w-full max-w-md rounded-3xl backdrop-blur-xl border-y-green-50">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-[#603310]">
                        Войдите в аккаунт
                    </h2>
                </div>
                <FormContainer
                    method={"post"}
                    url={"auth/sign-up"}
                    onSuccess={() => {
                        navigate("/login");
                        message.success('You are registered in successfully')
                    }}
                    onError={(err) => {
                        console.log(err);
                        message.success(err)
                    }}

                
                    fields={[
                        {
                            name: "first_name",
                            validations: [{ type: "required" }],
                            // value: "phapp0224mb@gmail.com",
                            onSubmitValue: (value) => value,
                        },
                        {
                            name: "second_name",
                            validations: [{ type: "required" }],
                            // value: "phapp0224mb@gmail.com",
                            onSubmitValue: (value) => value,
                        },
                        {
                            name: "nickname",
                            validations: [{ type: "required" }],
                            // value: "phapp0224mb@gmail.com",
                            onSubmitValue: (value) => value,
                        },

                        {
                            name: "email",
                            validations: [{ type: "required" }],
                            // value: "phapp0224mb@gmail.com",
                            onSubmitValue: (value) => value,
                        },
                        {
                            name: "password",
                            validations: [{ type: "required" }],
                            // value: "0224mb",
                            onSubmitValue: (value) => value,
                        },
                        {
                            name: "phone",
                            validations: [{ type: "required" }],
                            // value: "phapp0224mb@gmail.com",
                            onSubmitValue: (value) => value,
                        },
                        {
                            name: "city",
                            validations: [{ type: "required" }],
                            // value: "0224mb",
                            onSubmitValue: (value) => value,
                        },
                       
                        {
                            name: "bio",
                            validations: [{ type: "required" }],
                            // value: "0224mb",
                            onSubmitValue: (value) => value,
                        },
                    ]}
                >
                    {({ isSubmitting, values }) => {
                        console.log(values)
                        return (
                            <div className="flex flex-col gap-2.5">
                               <div>
                               <div>
                                    <FastField
                                        name="first_name"
                                        component={MainInput}
                                        placeholder="First Name"
                                        label="First Name"
                                        isPhone={false}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>
                                
                                <div>
                                    <FastField
                                        name="second_name"
                                        component={MainInput}
                                        placeholder="Second Name"
                                        label="Second Name"
                                        isPhone={false}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>

                                <div>
                                    <FastField
                                        name="nickname"
                                        component={MainInput}
                                        placeholder="User Name"
                                        label="Nick Name"
                                        isPhone={false}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>

                                <div>
                                    <FastField
                                        name="email"
                                        type='email'
                                        component={MainInput}
                                        placeholder="User Name"
                                        label="Email"
                                        isPhone={false}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>
                                
                                <div>
                                    <FastField
                                        name="password"
                                        component={MainInput}
                                        placeholder="***********"
                                        label="Пароль"
                                        isPassword={true}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>

                                <div>
                                    <FastField
                                        name="phone"
                                        component={MainInput}
                                        placeholder="***********"
                                        label="Phone"
                                        // isPassword={true}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>

                                <div>
                                    <FastField
                                        name="city"
                                        component={MainInput}
                                        placeholder="***********"
                                        label="City"
                                        // isPassword={true}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>

                                <div>
                                    <FastField
                                        name="bio"
                                        component={MainInput}
                                        placeholder="***********"
                                        label="Bio"
                                        // isPassword={true}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>
                                
                                <Button
                                    htmlType="submit"
                                    size="large"
                                    loading={isSubmitting}
                                    className="w-full bg-[#AD7226] hover:bg-[#603310]"
                                >
                                    <span className="text-white">Отправлять</span>
                                </Button>
                               </div>
                            </div>
                        );
                    }}
                </FormContainer>
            </Card>
        </section>
    )
})