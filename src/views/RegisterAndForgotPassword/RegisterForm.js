import {useForm} from "react-hook-form";
import {EyeIcon, EyeOffIcon} from "@heroicons/react/solid";
import {useState} from "react";
import UserService from "../../service/UserService";
import {useNavigate} from "react-router-dom";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RegisterForm() {
    const userService = new UserService();
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        await userService.createUser(data)
            .then((res) => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                }
            })
    };

    const Modal = () => (
        <Popup trigger={<span className="text-blue-600 underline cursor-pointer">Terms of Service</span>} modal>
            <p className="overflow-y-auto max-h-128">
                <span className="font-bold text-2xl">Website Terms and Conditions of Use</span><br/><br/>
                <b>1. Terms</b><br/>
                By accessing this Website, accessible from https://3in1.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.<br/><br/>

                <b>2. Use License</b><br/>
                Permission is granted to temporarily download one copy of the materials on 3in1's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:<br/><br/>

                modify or copy the materials;<br/>
                use the materials for any commercial purpose or for any public display;<br/>
                attempt to reverse engineer any software contained on 3in1's Website;<br/>
                remove any copyright or other proprietary notations from the materials; or<br/>
                transferring the materials to another person or "mirror" the materials on any other server.<br/>
                This will let 3in1 to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. <br/><br/>

                <b>3. Disclaimer</b><br/>
                All the materials on 3in1’s Website are provided "as is". 3in1 makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, 3in1 does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.<br/><br/>

                <b>4. Limitations</b><br/>
                3in1 or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on 3in1’s Website, even if 3in1 or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.<br/><br/>

                <b>5. Revisions and Errata</b><br/>
                The materials appearing on 3in1’s Website may include technical, typographical, or photographic errors. 3in1 will not promise that any of the materials in this Website are accurate, complete, or current. 3in1 may change the materials contained on its Website at any time without notice. 3in1 does not make any commitment to update the materials.<br/><br/>

                <b>6. Links</b><br/>
                3in1 has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by 3in1 of the site. The use of any linked website is at the user’s own risk.<br/><br/>

                <b>7. Site Terms of Use Modifications</b><br/>
                3in1 may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.<br/><br/>

                <b>8. Your Privacy</b><br/>
                Please read our Privacy Policy.<br/><br/>

                <b>9. Governing Law</b><br/>
                Any claim related to 3in1's Website shall be governed by the laws of tr without regards to its conflict of law provisions.<br/><br/>
            </p>
        </Popup>
    );

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-white mb-12">Sign Up</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <input
                            {...register("name")}
                            placeholder="First Name"
                            maxLength={50}
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <input
                            {...register("surname")}
                            placeholder="Last Name"
                            maxLength={50}
                            className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                            required
                        />
                    </div>
                </div>
                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        type="email"
                        maxLength={50}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                </div>
                <div className="relative">
                    <input
                        {...register("password")}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        minLength={6}
                        maxLength={40}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                    <EyeIcon
                        className={`absolute w-6 h-6 right-2 top-2 text-theme-brown cursor-pointer z-50 ${showPassword && "hidden"}`}
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}
                    />
                    <EyeOffIcon
                        className={`absolute w-6 h-6 right-2 top-2 text-theme-brown cursor-pointer z-50 ${!showPassword && "hidden"}`}
                        onClick={() => {
                            setShowPassword(!showPassword)
                        }}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <select
                        {...register("gender")}
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    >
                        <option value="FEMALE">Female</option>
                        <option value="MALE">Male</option>
                        <option value="OTHER">Other</option>
                    </select>
                    <input
                        {...register("birthDate")}
                        placeholder="Birth Date"
                        type="date"
                        className="w-full p-2 rounded focus:ring-2 focus:ring-green-600 outline-none"
                        required
                    />
                </div>
                <div>
                    <input
                        {...register("sign")}
                        type="checkbox"
                        className="w-4 h-4 rounded outline-none"
                        required
                    />
                    <label className="pl-2 text-xs text-center text-white">By signing up, you agree to the{"\t"}
                        <Modal />
                        {"\t"}and Privacy Policy, including Cookie Use.</label>
                </div>
                <div>
                    <input
                        type="submit"
                        className="w-full bg-theme-green p-2 font-semibold text-white cursor-pointer rounded outline-none pointer transform transition-colors duration-500 hover:bg-green-600"
                        required
                    />
                </div>
            </div>
        </form>
    );

}