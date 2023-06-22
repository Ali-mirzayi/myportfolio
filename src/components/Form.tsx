import { useState } from 'react';
import { useForm } from "react-hook-form";
import { TextInput, Button, Textarea, Notification } from '@mantine/core';
import { AnimatePresence, motion } from "framer-motion";

// interface state {Loading:boolean;isOk:any;}

export default function Form() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [status, setStatus] = useState<{ Loading: boolean, isOK: boolean | undefined }>({ Loading: false, isOK: undefined });
    const [open, setOpen] = useState(false)

    const onSubmit = async (data: any) => {
        setStatus(prevState => ({ ...prevState, Loading: true }));
        try {
            await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json", Accept: "application/json" },
            }).then((res) => {
                if (!res.ok) throw new Error("Failed to send message");
                return res.json();
            });
            setStatus({ Loading: false, isOK: true });
            setOpen(true);
            reset();
        } catch (error) {
            setStatus({ Loading: false, isOK: false });
            setOpen(true);
            console.log(error);
        }
    };

    // const Ali:string = errors.age?.message
    console.log(status);

    const onclose = () => {
        setStatus((rest: any) => ({ ...rest, isOK: undefined }))
    };

    return (
        <div style={{ margin: "100px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput sx={{ margin: "20px" }} placeholder="Name" error={errors.Name?.message?.toString()} {...register("Name", { pattern: { value: /^[A-Za-z]+$/i, message: "only string" } })} />
                <TextInput sx={{ margin: "20px" }} placeholder="Email" error={errors.Email?.message?.toString()} {...register("Email", { pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/, message: "only email" }, required: { value: true, message: "req" } })} />
                <Textarea sx={{ margin: "20px" }} autosize minRows={2} maxRows={4} placeholder="Message" error={errors.Message?.message?.toString()} {...register("Message", { required: { value: true, message: "req" }, maxLength: { value: 100, message: "this so long" } })} />
                <Button sx={{ margin: "20px" }} loading={status.Loading} type='submit' variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
            </form>
            <AnimatePresence>
                {
                    status.isOK !== undefined && (
                        status.isOK ?
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: "easeOut", duration: 1 }}>
                                <Notification onClose={onclose}>
                                    goood
                                </Notification>
                            </motion.div> :
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ ease: "easeOut", duration: 1 }}>
                                <Notification color="red" onClose={onclose}>
                                    bad
                                </Notification>
                            </motion.div>)
                }

            </AnimatePresence>
        </div>
    )
}
