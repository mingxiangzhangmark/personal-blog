import { Button, FileInput,  Select, TextInput } from "flowbite-react";
// import { useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function CreatePost() {
  // useEffect(() => {
  //   document.documentElement.lang = "en"; // 强制修改 HTML 的 lang 属性为英文
  // }, []);
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl font-semibold my-7">Create New Post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput type="text" placeholder="Post Title" id="title" required className="flex-1" />
          <Select>
            <option value='uncategorized'>Select a category</option>
            <option value='javascript'>JavaScript</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='react'>React</option>
            <option value='next'>Next.js</option>
            <option value='typescript'>TypeScript</option>
            <option value='.net'>.NET</option>
            <option value='database'>Database</option>
            <option value='java'>Java</option>
            <option value='python'>Python</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='fullstack'>Fullstack</option>
            <option value='devops'>DevOps</option>
            <option value='cloud'>Cloud</option>
            <option value='security'>Security</option>
            <option value='testing'>Testing</option>
            <option value='mobile'>Mobile</option>
            <option value='ai'>AI</option>
            <option value='other'>Other</option>
          </Select>
        </div>
        <div className="flex gap-4 justify-between items-center border-2 border-indigo-600 border-dashed p-3"> 
             <FileInput type= 'file' accept='image/*' language="en" />
            <Button gradientDuoTone = 'purpleToBlue' size='sm' outline >Upload Image</Button>
        </div>
        <ReactQuill theme="snow" placeholder="Write something amazing..." className="h-72 mb-12" required/>
        <Button type="submit" gradientDuoTone = 'purpleToPink' size='lg' className="mb-12">Publish Post</Button>
      </form>
    </div>
  )
}
