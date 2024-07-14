// App.tsx
"use client"
// App.tsx
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, User, Calendar, Edit, Home, User2, UserCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useCurrentUser } from '@/app/_context/UserProvider';
import { useFormStatus } from 'react-dom';
import { getUrl, saveProfile } from '@/app/_backend_actions/actions';



function Submit() {
  const { pending, data, method, action } = useFormStatus();


  return <button disabled={pending} className={`w-full px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 mt-4 flex items-center justify-center ${pending && "opacity-30"}`}>{!pending ? "Save" : "Saving ...."}</button>
}
const page: React.FC = () => {
  const { currentUser, setCurrentUser } = useCurrentUser() as any;
  if (!currentUser) {
    return null;
  }
  const [dp, setDp] = useState<any>();
  const [currImage, setCurrImage] = useState();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name == "profile_picture" && e.target.files) {
      setCurrentUser({
        ...currentUser,
        [name]: e?.target?.files[0],
      });
    }
    else {
      setCurrentUser({
        ...currentUser,
        [name]: value
      });
    }

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    saveProfile(currentUser);
    toast("Your details are updated", {
      description: `${currentUser.name} your details are updated successfully on ${new Date().toLocaleString()}`,
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
    console.log("currentUser");
    console.log(currentUser);
  };
  const removeImage = () => {
    setCurrImage(undefined);
    setCurrentUser({
      ...currentUser,
      profile_picture: null
    })

  }
  useEffect(() => {
    getUrl(currentUser.profile_picture, currentUser).then((url) => {
      setDp(url);
    })


  }, [currentUser?.profile_picture])


  return (
    <div className="flex flex-col items-center mt-10 w-full h-fit text-slate-900 px-2">
      <img src={currentUser.profile_picture ? dp : currentUser.dp_link} alt="Profile" className="w-24 h-24 rounded-full mb-4 object-cover " />

      <h1 className="text-3xl font-bold mb-6 text-white">Update your details</h1>
      <form className="w-full max-w-lg space-y-6 " onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <User className="w-6 h-6 text-gray-300" />
          <input
            type="text"
            name="name"
            value={currentUser?.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 "


          />
        </div>
        <div className="flex items-center space-x-2">
          <UserCircle className="w-6 h-6 text-gray-300" />
          <div className='flex sm:flex-row flex-col gap-1 text-slate-500 bg-inherit w-full'>

            <input
              type="file"
              name="profile_picture"
              onChange={(e: any) => {
                handleChange(e);
                if (e.target.files) {
                  setCurrImage(URL.createObjectURL(e.target.files[0] as any) as any);
                }
              }}
              placeholder=""
              className=" px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
              accept='image/* '
            />
            {currImage &&
              <div className={`aspect-auto picture-cover ${currImage != undefined && "sm:w-1/3"}`}>
                <img src={currImage ? currImage : ""} alt="" className='' />
              </div> }

              <button className='px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-4 flex items-center justify-center place-self-end ml-5' onClick={removeImage}> remove dp</button>
            
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-gray-300" />
          <input
            type="date"
            name="birthDay"
            value={currentUser?.birthDay}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"

          />
        </div>
        <div className="flex items-center space-x-2">
          <Github className="w-6 h-6 text-gray-300" />
          <input
            type="url"
            name="github"
            value={currentUser?.github}
            onChange={handleChange}
            placeholder="GitHub"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Linkedin className="w-6 h-6 text-gray-300" />
          <input
            type="url"
            name="linkedin"
            value={currentUser?.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Edit className="w-6 h-6 text-gray-300" />
          <textarea
            name="bio"
            value={currentUser?.bio}
            onChange={(e: any) => handleChange(e)}
            placeholder="Bio"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            rows={4}
          />
        </div>
        <Submit />
        <button
          type="button"
          onClick={() => window.location.href = '/'} // Replace with the actual home URL if necessary
          className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 mt-4 flex items-center justify-center"
        >
          <Home className="w-6 h-6 mr-2" />
          Go to Home
        </button>
      </form>
    </div>
  );
};

export default page;
