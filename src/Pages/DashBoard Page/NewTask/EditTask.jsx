

import { useQuery } from '@tanstack/react-query';

import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import UseAxiosPublic from '../../../Hooks/useAxiosPublic';

const EditTask = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = UseAxiosPublic();

  const { data: allTodo = [], refetch } = useQuery({
    queryKey: [user?.email, 'todos'],
    queryFn: async () => {
      const response = await axiosPublic.get(`/tasks/${user.email}`);
      return response.data;
    },
  });

  const deleteTodo = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/tasks/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      

      <div>
        {allTodo.map((item) => {
          const { _id, title, description, deadline, priority, status } = item;
          return (
            <div
              key={_id}
              className="bg-lightTwo p-12 flex flex-col gap-8 rounded-lg"
            >
              <h1 className="text-3xl font-lora font-semibold">
                Title : {title}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Description : {description}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Expire Deadline : {deadline}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Work priority : {priority}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Current status : {status}
              </h1>
              <FaTrashAlt onClick={() => deleteTodo(_id)} size={50} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditTask;