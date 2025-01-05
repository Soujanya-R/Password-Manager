import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manage = () => {
    const ref = useRef();
    const Passwordref = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArr, setpasswordArr] = useState([]);

    const ShowPassword = () => {
        Passwordref.current.type = "text";
        if (ref.current.src.includes("icons/crosseye.png")) {
            ref.current.src = "icons/eye.png";
            Passwordref.current.type = "text";
        } else {
            ref.current.src = "icons/crosseye.png";
            Passwordref.current.type = "password";
        }
    };

    const SavePassword = (e) => {
        e.preventDefault();
    
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            const newPassword = { ...form, id: uuidv4() };
    
            setpasswordArr([...passwordArr, newPassword]);
            localStorage.setItem("password", JSON.stringify([...passwordArr, newPassword]));
    
            console.log(passwordArr);
    
            toast.success('Password saved', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: 0,
                theme: "dark",
            });
        } else {
            toast.error('Invalid site, username, or password');
        }
    };
    

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArr(JSON.parse(passwords));
        }
    }, []);

    const CopyText = (text) => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "dark",

        });
    };

    const deletePassword = (id) => {
        console.log("Deleting id: ", id);
        const updated = passwordArr.filter(item => item.id !== id);
        setpasswordArr(updated);
        localStorage.setItem("passwords", JSON.stringify(updated));
        toast.success('Password deleted', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
            theme: "dark",

        });
    };

    const EditPassword = (id) => {
        console.log("Editing password");
        setform(passwordArr.filter(i => i.id == id)[0]);
        setpasswordArr(passwordArr.filter(item => item.id !== id));
    };

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar
                newestOnTop
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />

            <div className="relative w-full min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                <div className="w-full">
                    <div className='justify-center align-middle flex flex-col md:flex-row gap-10'>
                        <div className='text-center'>
                            <div className='italic text-center text-2xl md:text-3xl pt-10 md:pt-20'>
                                <span className=''> <lord-icon
                                    src="https://cdn.lordicon.com/depeqmsz.json"
                                    style={{ height: 50, width: 50 }}
                                    trigger="hover">
                                </lord-icon></span>
                                Your Passwords in our Locker</div>

                            <div className='align-middle flex flex-col md:flex-row justify-center pt-4 gap-4 md:gap-10'>

                                <form action="" className="w-full max-w-md">
                                    <div className='flex-col gap-4 md:gap-16 '>
                                        <input value={form.site} onChange={handleChange} name='site' placeholder='Add the url' type="text" className='border border-black rounded-2xl px-4 md:px-8 justify-between align-middle w-full' />
                                        <div className='pt-2 flex flex-col md:flex-row gap-2'>
                                            <input value={form.username} onChange={handleChange} name='username' placeholder='Enter username' type="text" className='border border-black rounded-2xl px-4 md:px-8 justify-between align-middle h-8 w-full md:w-auto' />
                                            <div className='relative w-full md:w-auto'>
                                                <input ref={Passwordref} value={form.password} onChange={handleChange} name='password' placeholder='Enter password' type="password" className='border border-black rounded-2xl px-4 md:px-8 justify-between align-middle h-8 w-full md:w-auto' />
                                                <span onClick={ShowPassword} className='absolute right-2 top-2 hover:cursor-pointer'><img ref={ref} width={20} src="icons\crosseye.png" alt="" /></span>
                                            </div>
                                        </div>
                                        <div className='pt-6 justify-center align-middle gap-4 md:gap-9 flex'>
                                            <button onClick={SavePassword} className='hover:border-2 border w-full md:w-40 italic border-black rounded-xl justify-center align-middle flex revert-layer'>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover">
                                                </lord-icon>
                                                Add Password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='pt-5 w-full overflow-auto'>
                                <h1 className='italic font-bold text-lg md:text-xl'>Passwords</h1>
                                {passwordArr == 0 && <div>No passwords to show </div>}
                                {passwordArr != 0 && <table className="border-2 border-black table-auto min-w-full text-sm md:text-base mb-5">
                                    <thead className='bg-purple-300 '>
                                        <tr>
                                            <th>Site</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th className='py-2'>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody className='min-w-full'>
                                        {passwordArr.map((item, index) => (
                                            <tr key={index}>
                                                <td className='flex gap-2 px-5'>
                                                    <a className='cursor-pointer break-words' href={item.site} target='_blank'>{item.site}</a>
                                                    <img onClick={() => { { CopyText(item.site) } }} style={{ borderRadius: 40, cursor: 'pointer' }} width={30} src="public/icons/copy.gif" alt="" />
                                                </td>

                                                <td>
                                                    <div className='flex gap-2 px-5'>
                                                        <span>{item.username}</span>
                                                        <img onClick={() => { CopyText(item.username) }} style={{ borderRadius: 40, cursor: 'pointer' }} width={30} src="public/icons/copy.gif" alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='flex gap-2 px-5'>
                                                        <span>{item.password}</span>
                                                        <img onClick={() => { CopyText(item.password) }} style={{ borderRadius: 40, cursor: 'pointer' }} width={30} src="public/icons/copy.gif" alt="" />
                                                    </div>
                                                </td>
                                                <td className='gap-2 px-5'>
                                                    <span className='align-middle justify-center flex gap-2'>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/gwlusjdu.json"
                                                            trigger="hover" onClick={() => { EditPassword(item.id) }}>
                                                        </lord-icon>
                                                        <lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover" onClick={() => { deletePassword(item.id) }} >
                                                        </lord-icon>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>}
                            </div>
                        </div>
                    </div>
                    </div>
</div>
                </>
                );
};

                export default Manage;
