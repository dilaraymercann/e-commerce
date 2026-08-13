import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { loginUser } from "../../store/actions/clientActions";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = async (data) => {
        const loginData = {
            email: data.email,
            password: data.password,
        };

        const result = await dispatch(
            loginUser(loginData, data.rememberMe)
        );

        if (result.success) {
            const previousPage = location.state?.from;

            if (previousPage) {
                navigate(previousPage);
            } else {
                navigate("/");
            }
        } else {
            toast.error(result.message);
        }
    };

    return (
        <section className="mx-auto max-w-[480px] rounded bg-white p-8 shadow">
            <h1 className="mb-8 text-center text-3xl font-bold text-[#252B42]">
                Login
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                <div>
                    <label className="mb-2 block text-sm font-bold text-[#252B42]">
                        Email
                    </label>

                    <input
                        type="email"
                        className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold text-[#252B42]">
                        Password
                    </label>

                    <input
                        type="password"
                        className="w-full rounded border border-[#E6E6E6] px-4 py-3 outline-none"
                        {...register("password")}
                    />
                </div>

                <label className="flex items-center gap-2 text-sm text-[#737373]">
                    <input
                        type="checkbox"
                        {...register("rememberMe")}
                    />

                    Remember Me
                </label>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded bg-[#23A6F0] px-6 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Logging in...
                        </span>
                    ) : (
                        "Login"
                    )}
                </button>
                <p className="mt-5 text-center text-sm text-[#737373]">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-bold !text-[#23A6F0] !no-underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default LoginForm;