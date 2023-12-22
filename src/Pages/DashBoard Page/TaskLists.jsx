import { useQuery } from '@tanstack/react-query';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import UseAxiosPublic from '../../Hooks/useAxiosPublic';
import { useEffect } from 'react';

const CompletedProgress = () => {
    const axiosSecure = UseAxiosPublic();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addToCompleted(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addToCompleted = (id) => {
        const requestBody = { status: 'completed' };
        axiosSecure
            .patch(`/tasks/${id}`, requestBody)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    const { data: completedData = [],refetch } = useQuery({
        queryKey: ['complete'],
        queryFn: async () => {
            const response = await axiosSecure.get('/completed');
            console.log(response);
            return response.data;
        },
    });

    // TODO: I have to add here useEffect and retch when i am going to deploy
    useEffect(() => {
      const intervalId = setInterval(() => {
        refetch();
      }, 500);
      return () => clearInterval(intervalId);
    }, [refetch]);

    return (
        <div ref={drop} className={`min-h-screen ${isOver ? 'bg-green-200' : ''}`}>
            {completedData.map((item, index) => {
                const { title, description, priority } = item;
                return (
                    <div
                        key={index}
                        className="group bg-lightTwo m-4 p-4 rounded-lg hover:bg-transparent border-2 border-lightTwo duration-300"
                    >
                        <h1 className="text-2xl capitalize font-lora">{title}</h1>
                        <p className="text-xl lowercase font-lora">{description}</p>
                        <p className="bg-darkThree inline-block px-4 py-2 border-2 border-darkThree text-lightOne text-xl uppercase font-bold font-lora group-hover:bg-transparent group-hover:duration-300 group-hover:text-darkOne">
                            {priority}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const SectionProgress = () => {
    const axiosPublic = UseAxiosPublic();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToProgress(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addItemToProgress = (id) => {
        const requestBody = { status: 'ongoing' };
        axiosPublic
            .patch(`/tasks/${id}`, requestBody)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    };

    const { data: ongoingData = [],refetch } = useQuery({
        queryKey: ['progress'],
        queryFn: async () => {
            const response = await axiosPublic.get('/ongoing');
            console.log(response);
            return response.data;
        },
    });

    // TODO: I have to add here useEffect and retch when i am going to deploy
    useEffect(() => {
      const intervalId = setInterval(() => {
        refetch();
      }, 500);
      return () => clearInterval(intervalId);
    }, [refetch]);

    return (
        <div ref={drop} className={`min-h-screen ${isOver ? 'bg-green-200' : ''}`}>
            {ongoingData.map((item, index) => {
                const { title, description, priority } = item;
                return (
                    <div
                        key={index}
                        className="group bg-lightTwo m-4 p-4 rounded-lg hover:bg-transparent border-2 border-lightTwo duration-300"
                    >
                        <h1 className="text-2xl capitalize font-lora">{title}</h1>
                        <p className="text-xl lowercase font-lora">{description}</p>
                        <p className="bg-darkThree inline-block px-4 py-2 border-2 border-darkThree text-lightOne text-xl uppercase font-bold font-lora group-hover:bg-transparent group-hover:duration-300 group-hover:text-darkOne">
                            {priority}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const DraggableTask = ({ taskItem }) => {
    const { _id, priority, description, title } = taskItem;

    const [, drag] = useDrag(() => ({
        type: 'task',
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            key={_id}
            className="group bg-lightTwo m-4 p-4 rounded-lg hover:bg-transparent border-2 border-lightTwo duration-300"
        >
            <h1 className="text-2xl capitalize font-lora">{title}</h1>
            <p className="text-xl lowercase font-lora">{description}</p>
            <p className="bg-darkThree inline-block px-4 py-2 border-2 border-darkThree text-lightOne text-xl uppercase font-bold font-lora group-hover:bg-transparent group-hover:duration-300 group-hover:text-darkOne">
                {priority}
            </p>
        </div>
    );
};

// ! main task
const TaskLists = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: taskData = [],refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/created`);
            return response.data;
        },
    });

    // TODO: I have to add here useEffect and retch when i am going to deploy
    useEffect(() => {
      const intervalId = setInterval(() => {
        refetch();
      }, 1000);
      return () => clearInterval(intervalId);
    }, [refetch]);

    return (
        <div className="grid grid-cols-9 gap-4 my-12">
            {/* div one */}
            <div className="col-span-3 border-2 border-lightOne min-h-screen">
                {taskData.map((item) => {
                    return <DraggableTask key={item._id} taskItem={item} />;
                })}
            </div>
            {/* div two */}
            <div className="col-span-3 border-2 border-lightTwo min-h-screen">
                <SectionProgress />
            </div>
            {/* div three */}
            <div className="col-span-3 border-2 border-lightThree min-h-screen">
                <CompletedProgress />
            </div>
        </div>
    );
};

DraggableTask.propTypes = {
    taskItem: PropTypes.object.isRequired,
};

export default TaskLists;