import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import UseAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from '../../Providers/AuthProvider';

const AddTaskForm = (props) => {
    const { closeModal } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const formRef = useRef();
    const { user } = useContext(AuthContext);
    const loggedInUserEmail = user?.email;
    const axiosPublic = UseAxiosPublic();

    const onSubmit = (data) => {
        const { title, description, deadline, priority } = data;
        const formData = {
            title,
            description,
            deadline,
            priority,
            loggedInUserEmail,
            status: 'created',
        };

        axiosPublic
            .post('/tasks', formData)
            .then((response) => {
                console.log(response);
                Swal.fire('Good job!', 'task added', 'success');
                formRef.current.reset();
                closeModal();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                {/* Title */}
                <div className="flex flex-col gap-8 my-8">
                    <label
                        htmlFor="title"
                        className="text-3xl uppercase font-lora font-semibold tracking-widest"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        placeholder="title"
                        className="font-roboto text-2xl p-4 outline-none border-2 border-darkOne rounded-lg"
                        {...register('title', { required: true })}
                    />
                    {errors.title && (
                        <span className="text-red-500 font-poppins uppercase text-xl">
                            title required
                        </span>
                    )}
                </div>

                {/* description */}
                <div className="flex flex-col gap-8 my-8">
                    <label
                        htmlFor="description"
                        className="text-3xl uppercase font-lora font-semibold tracking-widest"
                    >
                        description
                    </label>
                    <input
                        type="text"
                        placeholder="description"
                        className="font-roboto text-2xl p-4 outline-none border-2 border-darkOne rounded-lg"
                        {...register('description', { required: true })}
                    />
                    {errors.description && (
                        <span className="text-red-500 font-poppins uppercase text-xl">
                            Description required
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-8 my-8">
                    <label
                        htmlFor="date"
                        className="text-3xl uppercase font-lora font-semibold tracking-widest"
                    >
                        Set Deadline
                    </label>
                    <input
                        type="date"
                        name=""
                        id=""
                        className="font-lora p-2 rounded-lg text-xl"
                        {...register('deadline', { required: true })}
                    />
                    {errors.deadline && (
                        <span className="text-red-500 font-poppins uppercase text-xl">
                            Deadline required
                        </span>
                    )}
                </div>

                {/* Priority */}
                <div className="flex flex-col gap-8 my-8">
                    <label
                        htmlFor=""
                        className="text-3xl uppercase font-lora font-semibold tracking-widest"
                    >
                        Set Priority
                    </label>
                    <select
                        name=""
                        id=""
                        className="font-lora text-xl outline-none border-2 border-darkOne rounded-lg p-2"
                        {...register('priority', { required: true })}
                    >
                        <option
                            value="low"
                            className="font-lora text-xl outline-none border-2 border-darkOne"
                        >
                            Low Priority
                        </option>
                        <option
                            value="medium"
                            className="font-lora text-xl outline-none border-2 border-darkOne"
                        >
                            Medium Priority
                        </option>
                        <option
                            value="high"
                            className="font-lora text-xl outline-none border-2 border-darkOne"
                        >
                            High Priority
                        </option>
                    </select>
                    {errors.priority && (
                        <span className="text-red-500 font-poppins uppercase text-xl">
                            priority required
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-darkOne px-12 py-4 text-lightOne text-sm font-lora font-bold tracking-wide rounded-lg border-2 border-lightOne hover:border-darkOne duration-200 hover:bg-transparent hover:scale-105 hover:text-darkThree capitalize"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

AddTaskForm.propTypes = {
    closeModal: PropTypes.func.isRequired,
};

export default AddTaskForm;