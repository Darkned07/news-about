import { useRef } from "react";
import { toast } from "react-toastify";

function Create() {
  const title: any = useRef();
  const image: any = useRef();
  const postedAt: any = useRef();
  const description: any = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      title.current.value.trim().length > 1 &&
      image.current.value.trim().length > 1 &&
      postedAt.current.value.trim().length > 1 &&
      description.current.value.trim().length > 1
    ) {
      console.log({
        title: title.current.value,
        image: image.current.value,
        postedAt: postedAt.current.value,
        description: description.current.value,
      });
      toast.success("Malumotlar kiritildi :)");
    } else {
      toast.error("Iltimos barcha inputlarni to'ldiring!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[10px]">
      <h2 className="text-[30px] font-bold text-[#141829]">Create News :)</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] gap-[20px]"
      >
        <label className="input input-bordered flex items-center gap-2">
          Title:
          <input
            ref={title}
            type="text"
            className="grow"
            placeholder="Title writing..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Img Url:
          <input
            ref={image}
            type="text"
            className="grow"
            placeholder="img url writing..."
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Posted Time:
          <input
            ref={postedAt}
            type="text"
            className="grow"
            placeholder="Posted time writing..."
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Description:</span>
          </div>
          <textarea
            ref={description}
            className="textarea textarea-bordered h-24"
            placeholder="Description writing..."
          ></textarea>
        </label>
        <button className="btn btn-outline btn-neutral text-[25px]">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
