import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import {
    addAddress,
    updateAddress,
} from "../../store/actions/clientActions";

const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
];

const AddressForm = ({
    editingAddress,
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
    } = useForm();

    useEffect(() => {
        if (editingAddress) {
            reset({
                title: editingAddress.title,
                name: editingAddress.name,
                surname: editingAddress.surname,
                phone: editingAddress.phone,
                city: editingAddress.city,
                district: editingAddress.district,
                neighborhood:
                    editingAddress.neighborhood,
                addressDetails: "",
            });
        }
    }, [editingAddress, reset]);

    const onSubmit = async (data) => {
        /*
         Backend örneğinde address diye ayrı field yok.
         Bu nedenle fazladan key göndermiyoruz.
        */

        const payload = {
            title: data.title,
            name: data.name,
            surname: data.surname,
            phone: data.phone,
            city: data.city,
            district: data.district,

            neighborhood:
                `${data.neighborhood} ${data.addressDetails}`.trim(),
        };

        let result;

        if (editingAddress) {
            result = await dispatch(
                updateAddress({
                    id: editingAddress.id,
                    ...payload,
                })
            );
        } else {
            result = await dispatch(
                addAddress(payload)
            );
        }

        if (result.success) {
            reset();
            onClose();
        }
    };

    return (
        <div className="mt-6 rounded border border-[#E8E8E8] bg-white p-6">
            <h3 className="mb-6 text-lg font-bold text-[#252B42]">
                {editingAddress
                    ? "Adresi Düzenle"
                    : "Yeni Adres Ekle"}
            </h3>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
                <div>
                    <label className="mb-2 block text-sm font-bold">
                        Address Title
                    </label>

                    <input
                        {...register("title", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    />

                    {errors.title && (
                        <p className="mt-1 text-xs text-red-500">
                            Address title is required.
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        Phone
                    </label>

                    <input
                        {...register("phone", {
                            required: true,
                            pattern: /^05\d{9}$/,
                        })}
                        placeholder="05XXXXXXXXX"
                        className="w-full rounded border px-4 py-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        Name
                    </label>

                    <input
                        {...register("name", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        Surname
                    </label>

                    <input
                        {...register("surname", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        City
                    </label>

                    <select
                        {...register("city", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    >
                        <option value="">
                            Select City
                        </option>

                        {cities.map((city) => (
                            <option
                                key={city}
                                value={city.toLocaleLowerCase(
                                    "tr-TR"
                                )}
                            >
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-bold">
                        District
                    </label>

                    <input
                        {...register("district", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-bold">
                        Neighborhood
                    </label>

                    <input
                        {...register("neighborhood", {
                            required: true,
                        })}
                        className="w-full rounded border px-4 py-3"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-bold">
                        Address Details
                    </label>

                    <textarea
                        {...register("addressDetails")}
                        rows="4"
                        placeholder="Street, building and door numbers"
                        className="w-full resize-none rounded border px-4 py-3"
                    />
                </div>

                <div className="flex gap-3 md:col-span-2">

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded bg-[#E77C40] px-6 py-3 text-sm font-bold text-white"
                    >
                        {isSubmitting
                            ? "Saving..."
                            : editingAddress
                                ? "Update Address"
                                : "Save Address"}
                    </button>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded border px-6 py-3 text-sm font-bold"
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </div>
    );
};

export default AddressForm;