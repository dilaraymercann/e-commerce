import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";

const SignupForm = () => {
    const [roles, setRoles] = useState([]);
    const [submitError, setSubmitError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const selectedRoleId = watch("role_id");
    const password = watch("password");

    const selectedRole = roles.find(
        (role) => String(role.id) === String(selectedRoleId)
    );

    const isStoreSelected = selectedRole?.code === "store";

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const response = await api.get("/roles");
                setRoles(response.data);
                console.log(response.data);

                const customerRole = response.data.find(
                    (role) => role.code === "customer"
                );

                if (customerRole) {
                    setValue("role_id", customerRole.id);
                }
            } catch (error) {
                setSubmitError("Roller yüklenirken bir hata oluştu.");
            }
        };

        fetchRoles();
    }, [setValue]);

    const onSubmit = async (data) => {
        setSubmitError("");
        setSuccessMessage("");

        const formData = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: Number(data.role_id),
        };

        if (isStoreSelected) {
            formData.store = {
                name: data.store.name,
                phone: data.store.phone,
                tax_no: data.store.tax_no,
                bank_account: data.store.bank_account,
            };
        }

        try {
            await api.post("/signup", formData);

            setSuccessMessage(
                "You need to click link in email to activate your account!"
            );

            setTimeout(() => {
                window.history.back();
            }, 1500);
        } catch (error) {
            setSubmitError(
                error.response?.data?.message || "Kayıt işlemi sırasında hata oluştu."
            );
        }
    };

    return (
        <section className="mx-auto max-w-[520px] rounded bg-white p-8 shadow">
            <h1 className="mb-6 text-3xl font-bold text-[#252B42]">Sign Up</h1>

            {submitError && (
                <p className="mb-4 rounded bg-red-100 p-3 text-sm text-red-600">
                    {submitError}
                </p>
            )}

            {successMessage && (
                <p className="mb-4 rounded bg-green-100 p-3 text-sm text-green-700">
                    {successMessage}
                </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <label className="mb-2 block text-sm font-bold">Name</label>
                    <input
                        className="w-full rounded border px-4 py-3 outline-none"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Name must be at least 3 characters",
                            },
                        })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">Email</label>
                    <input
                        className="w-full rounded border px-4 py-3 outline-none"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email",
                            },
                        })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">Password</label>
                    <input
                        type="password"
                        className="w-full rounded border px-4 py-3 outline-none"
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
                                message:
                                    "Password must include uppercase, lowercase, number and special character",
                            },
                        })}
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        Password Confirm
                    </label>
                    <input
                        type="password"
                        className="w-full rounded border px-4 py-3 outline-none"
                        {...register("passwordConfirm", {
                            required: "Password confirmation is required",
                            validate: (value) =>
                                value === password || "Passwords do not match",
                        })}
                    />
                    {errors.passwordConfirm && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.passwordConfirm.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">Role</label>
                    <select
                        className="w-full rounded border px-4 py-3 outline-none"
                        {...register("role_id", {
                            required: "Role is required",
                        })}
                    >
                        {roles.map((role) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                {isStoreSelected && (
                    <>
                        <div>
                            <label className="mb-2 block text-sm font-bold">
                                Store Name
                            </label>
                            <input
                                className="w-full rounded border px-4 py-3 outline-none"
                                {...register("store.name", {
                                    required: "Store name is required",
                                    minLength: {
                                        value: 3,
                                        message: "Store name must be at least 3 characters",
                                    },
                                })}
                            />
                            {errors.store?.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.store.name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">
                                Store Phone
                            </label>
                            <input
                                placeholder="05XXXXXXXXX"
                                className="w-full rounded border px-4 py-3 outline-none"
                                {...register("store.phone", {
                                    required: "Phone is required",
                                    pattern: {
                                        value: /^05\d{9}$/,
                                        message: "Please enter a valid Türkiye phone number",
                                    },
                                })}
                            />
                            {errors.store?.phone && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.store.phone.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">
                                Store Tax ID
                            </label>
                            <input
                                placeholder="T1234V123456"
                                className="w-full rounded border px-4 py-3 outline-none"
                                {...register("store.tax_no", {
                                    required: "Tax ID is required",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: "Tax ID format must be TXXXXVXXXXXX",
                                    },
                                })}
                            />
                            {errors.store?.tax_no && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.store.tax_no.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold">
                                Store Bank Account
                            </label>
                            <input
                                placeholder="TR..."
                                className="w-full rounded border px-4 py-3 outline-none"
                                {...register("store.bank_account", {
                                    required: "IBAN is required",
                                    pattern: {
                                        value: /^TR\d{24}$/,
                                        message: "Please enter a valid Türkiye IBAN",
                                    },
                                })}
                            />
                            {errors.store?.bank_account && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.store.bank_account.message}
                                </p>
                            )}
                        </div>
                    </>
                )}

                <button
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded bg-[#23A6F0] px-6 py-3 font-bold text-white disabled:opacity-60"
                >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
            </form>
        </section>
    );
};

export default SignupForm;