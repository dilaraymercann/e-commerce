import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
    addCreditCard,
    updateCreditCard,
} from "../../store/actions/clientActions";

const CardForm = ({
    editingCard,
    onClose,
}) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({
        defaultValues: {
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: "",
        },
    });

    useEffect(() => {
        if (editingCard) {
            reset({
                card_no: editingCard.card_no,
                expire_month:
                    editingCard.expire_month,
                expire_year:
                    editingCard.expire_year,
                name_on_card:
                    editingCard.name_on_card,
            });
        } else {
            reset({
                card_no: "",
                expire_month: "",
                expire_year: "",
                name_on_card: "",
            });
        }
    }, [editingCard, reset]);

    const onSubmit = async (data) => {
        const payload = {
            card_no: data.card_no.replace(/\s/g, ""),
            expire_month: Number(
                data.expire_month
            ),
            expire_year: Number(
                data.expire_year
            ),
            name_on_card: data.name_on_card,
        };

        let result;

        if (editingCard) {
            result = await dispatch(
                updateCreditCard({
                    id: editingCard.id,
                    ...payload,
                })
            );
        } else {
            result = await dispatch(
                addCreditCard(payload)
            );
        }

        if (result.success) {
            reset();
            onClose();
        }
    };

    const currentYear =
        new Date().getFullYear();

    const years = Array.from(
        { length: 15 },
        (_, index) => currentYear + index
    );

    return (
        <div className="rounded border border-[#E8E8E8] bg-white p-6">

            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#252B42]">
                    {editingCard
                        ? "Kartı Düzenle"
                        : "Kart Bilgileri"}
                </h3>

                <button
                    type="button"
                    onClick={onClose}
                    className="text-sm font-bold text-[#737373]"
                >
                    Vazgeç
                </button>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                <div>
                    <label className="mb-2 block text-sm font-bold text-[#252B42]">
                        Kart Üzerindeki İsim
                    </label>

                    <input
                        {...register(
                            "name_on_card",
                            {
                                required:
                                    "Kart üzerindeki isim zorunludur.",
                                minLength: {
                                    value: 3,
                                    message:
                                        "En az 3 karakter olmalıdır.",
                                },
                            }
                        )}
                        className="w-full rounded border border-[#E8E8E8] px-4 py-3 outline-none focus:border-[#E77C40]"
                    />

                    {errors.name_on_card && (
                        <p className="mt-1 text-xs text-red-500">
                            {
                                errors
                                    .name_on_card
                                    .message
                            }
                        </p>
                    )}
                </div>
                <div>
                    <label className="mb-2 block text-sm font-bold text-[#252B42]">
                        Kart Numarası
                    </label>

                    <input
                        maxLength={16}
                        inputMode="numeric"
                        {...register("card_no", {
                            required:
                                "Kart numarası zorunludur.",
                            pattern: {
                                value: /^\d{16}$/,
                                message:
                                    "Kart numarası 16 haneli olmalıdır.",
                            },
                        })}
                        className="w-full rounded border border-[#E8E8E8] px-4 py-3 outline-none focus:border-[#E77C40]"
                    />

                    {errors.card_no && (
                        <p className="mt-1 text-xs text-red-500">
                            {
                                errors.card_no
                                    .message
                            }
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#252B42]">
                            Ay
                        </label>

                        <select
                            {...register(
                                "expire_month",
                                {
                                    required:
                                        "Ay seçiniz.",
                                }
                            )}
                            className="w-full rounded border border-[#E8E8E8] px-4 py-3"
                        >
                            <option value="">
                                Ay
                            </option>

                            {Array.from(
                                { length: 12 },
                                (_, index) =>
                                    index + 1
                            ).map((month) => (
                                <option
                                    key={month}
                                    value={month}
                                >
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#252B42]">
                            Yıl
                        </label>

                        <select
                            {...register(
                                "expire_year",
                                {
                                    required:
                                        "Yıl seçiniz.",
                                }
                            )}
                            className="w-full rounded border border-[#E8E8E8] px-4 py-3"
                        >
                            <option value="">
                                Yıl
                            </option>

                            {years.map((year) => (
                                <option
                                    key={year}
                                    value={year}
                                >
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-[#E77C40] px-6 py-3 text-sm font-bold text-white disabled:opacity-50"
                >
                    {isSubmitting
                        ? "Kaydediliyor..."
                        : editingCard
                            ? "Kartı Güncelle"
                            : "Kartı Kaydet"}
                </button>

            </form>
        </div>
    );
};

export default CardForm;