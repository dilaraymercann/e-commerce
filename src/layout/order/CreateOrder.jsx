import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Trash2, Pencil } from "lucide-react";

import {
    fetchAddresses,
    deleteAddress,
} from "../../store/actions/clientActions";

import AddressForm from "../../components/order/AddressForm";

const CreateOrder = () => {
    const dispatch = useDispatch();

    const addressList = useSelector(
        (state) => state.client.addressList
    );

    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );

    const [showAddressForm, setShowAddressForm] =
        useState(false);

    const [editingAddress, setEditingAddress] =
        useState(null);

    const [selectedAddressId, setSelectedAddressId] =
        useState(null);

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    const selectedItems = cart.filter(
        (item) => item.checked
    );

    const productsTotal = selectedItems.reduce(
        (total, item) =>
            total +
            item.product.price * item.count,
        0
    );

    const shippingPrice =
        productsTotal > 0 ? 29.99 : 0;

    const discount =
        productsTotal >= 150
            ? shippingPrice
            : 0;

    const grandTotal =
        productsTotal +
        shippingPrice -
        discount;

    const handleEdit = (address) => {
        setEditingAddress(address);
        setShowAddressForm(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteAddress(id));

        if (selectedAddressId === id) {
            setSelectedAddressId(null);
        }
    };

    return (
        <section className="bg-[#FAFAFA] py-10 font-montserrat">
            <div className="mx-auto max-w-[1200px] px-4">

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
                    <div>
                        <div className="mb-6 grid grid-cols-2 overflow-hidden rounded border border-[#E8E8E8] bg-white">

                            <div className="border-b-4 border-[#E77C40] p-5">
                                <div className="flex items-center gap-3">

                                    <span className="text-3xl font-bold text-[#F3CD03]">
                                        1
                                    </span>

                                    <div>
                                        <h2 className="text-lg font-bold text-[#E77C40]">
                                            Adres Bilgileri
                                        </h2>

                                        <p className="text-xs text-[#737373]">
                                            Teslimat ve fatura adresinizi seçin.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center gap-3">

                                    <span className="text-3xl font-bold text-[#F3CD03]">
                                        2
                                    </span>

                                    <div>
                                        <h2 className="text-lg font-bold text-[#737373]">
                                            Ödeme Seçenekleri
                                        </h2>

                                        <p className="text-xs text-[#737373]">
                                            Kart bilgilerinizi sonraki adımda gireceksiniz.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="rounded border border-[#E8E8E8] bg-white p-6">

                            <div className="mb-6 flex items-center justify-between">

                                <h2 className="text-xl font-bold text-[#252B42]">
                                    Teslimat Adresi
                                </h2>

                                <button
                                    onClick={() => {
                                        setEditingAddress(null);
                                        setShowAddressForm(
                                            !showAddressForm
                                        );
                                    }}
                                    className="flex items-center gap-2 text-sm font-bold text-[#E77C40]"
                                >
                                    <Plus size={18} />
                                    Yeni Adres Ekle
                                </button>

                            </div>

                            {showAddressForm && (
                                <AddressForm
                                    editingAddress={
                                        editingAddress
                                    }
                                    onClose={() => {
                                        setShowAddressForm(
                                            false
                                        );
                                        setEditingAddress(null);
                                    }}
                                />
                            )}

                            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

                                {addressList.map(
                                    (address) => (
                                        <div
                                            key={address.id}
                                            onClick={() =>
                                                setSelectedAddressId(
                                                    address.id
                                                )
                                            }
                                            className={`cursor-pointer rounded border p-5 transition ${selectedAddressId ===
                                                address.id
                                                ? "border-2 border-[#E77C40] bg-[#FFF7F0]"
                                                : "border-[#E8E8E8] bg-white"
                                                }`}
                                        >

                                            <div className="mb-4 flex items-center justify-between">

                                                <div className="flex items-center gap-2">

                                                    <input
                                                        type="radio"
                                                        checked={
                                                            selectedAddressId ===
                                                            address.id
                                                        }
                                                        onChange={() =>
                                                            setSelectedAddressId(
                                                                address.id
                                                            )
                                                        }
                                                    />

                                                    <span className="font-bold text-[#252B42]">
                                                        {
                                                            address.title
                                                        }
                                                    </span>

                                                </div>

                                                <div className="flex gap-3">

                                                    <button
                                                        onClick={(
                                                            event
                                                        ) => {
                                                            event.stopPropagation();

                                                            handleEdit(
                                                                address
                                                            );
                                                        }}
                                                        className="text-[#737373] hover:text-[#23A6F0]"
                                                    >
                                                        <Pencil
                                                            size={
                                                                16
                                                            }
                                                        />
                                                    </button>

                                                    <button
                                                        onClick={(
                                                            event
                                                        ) => {
                                                            event.stopPropagation();

                                                            handleDelete(
                                                                address.id
                                                            );
                                                        }}
                                                        className="text-[#737373] hover:text-red-500"
                                                    >
                                                        <Trash2
                                                            size={
                                                                16
                                                            }
                                                        />
                                                    </button>

                                                </div>
                                            </div>

                                            <h3 className="mb-2 font-bold text-[#252B42]">
                                                {address.name}{" "}
                                                {address.surname}
                                            </h3>

                                            <p className="mb-2 text-sm text-[#737373]">
                                                {address.phone}
                                            </p>

                                            <p className="text-sm leading-6 text-[#737373]">
                                                {
                                                    address.neighborhood
                                                }
                                                ,{" "}
                                                {
                                                    address.district
                                                }
                                                , {address.city}
                                            </p>

                                        </div>
                                    )
                                )}

                            </div>

                        </div>
                    </div>

                    {/* RIGHT SUMMARY */}
                    <div className="h-fit lg:sticky lg:top-6">

                        <div className="rounded border border-[#E8E8E8] bg-white p-5 shadow-sm">

                            <h2 className="mb-5 text-xl font-medium text-[#252B42]">
                                Sipariş Özeti
                            </h2>

                            <div className="space-y-3 text-sm">

                                <div className="flex justify-between">
                                    <span className="text-[#737373]">
                                        Ürünün Toplamı
                                    </span>

                                    <span className="font-bold">
                                        $
                                        {productsTotal.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#737373]">
                                        Kargo Toplam
                                    </span>

                                    <span className="font-bold">
                                        $
                                        {shippingPrice.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <span className="text-[#737373]">
                                        150 TL ve Üzeri Kargo Bedava
                                    </span>

                                    <span className="font-bold text-[#E77C40]">
                                        -$
                                        {discount.toFixed(2)}
                                    </span>
                                </div>

                            </div>

                            <div className="my-5 border-t" />

                            <div className="flex justify-between">
                                <span className="font-bold">
                                    Toplam
                                </span>

                                <span className="text-xl font-bold text-[#E77C40]">
                                    $
                                    {grandTotal.toFixed(2)}
                                </span>
                            </div>

                        </div>

                        <button
                            type="button"
                            disabled={!selectedAddressId}
                            className="mt-4 w-full rounded bg-[#E77C40] py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Kaydet ve Devam Et
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default CreateOrder;