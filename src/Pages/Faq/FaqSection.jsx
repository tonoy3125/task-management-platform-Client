

const FaqSection = () => {

    return (
        <div className="lg:m-[10rem] md:m-[3rem] m-[1rem]">
            <div className="gap-3 mb-[5rem] mt-5 px-1 lg:px-0 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-darkOne font-lora uppercase">
                    Faq
                </h1>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkTwo capitalize font-lora">
                    Why you choose us!
                </h1>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is and how does it work?
                </div>
                <div className="collapse-content">
                    <p className="font-medium"><span className="font-bold">Task Management</span> is a task
                        management platform designed to help individuals and teams organize,
                        track, and collaborate on tasks efficiently. It works by providing a
                        centralized space where users can create tasks, assign them to team
                        members, set deadlines, and monitor progress.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    How can I create a new task on
                    <span className="font-semibold"> Task Management</span>?
                </div>
                <div className="collapse-content">
                    <p className="font-medium">To create a new task, simply log in to your account, navigate to the
                        task creation section, and fill in the required details such as task
                        name, description, assignee, and due date. Click &apos;Save&apos; to
                        add the task to your list.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I assign tasks to specific team members?
                </div>
                <div className="collapse-content">
                    <p className="font-medium">Yes, <span className="font-semibold">Task Management</span> allows
                        you to assign tasks to specific team members. When creating or
                        editing a task, you can select the assignee from your team members.</p>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;