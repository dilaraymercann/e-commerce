import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import {
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    toggleCartItem,
} from "../../store/actions/shoppingCartActions";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );

    const selectedItems = cart.filter(
        (item) => item.checked
    );

    const selectedProductCount = selectedItems.reduce(
        (total, item) => total + item.count,
        0
    );

    const productsTotal = selectedItems.reduce(
        (total, item) =>
            total + item.product.price * item.count,
        0
    );

    const shippingPrice = productsTotal > 0 ? 29.99 : 0;

    const discount =
        productsTotal >= 150
            ? shippingPrice
            : 0;

    const grandTotal =
        productsTotal + shippingPrice - discount;

    return (
        <section className="bg-[#FAFAFA] py-12 font-montserrat">
            <div className="mx-auto max-w-[1200px] px-4">

                <h1 className="mb-6 !text-2xl font-medium text-[#252B42]">
                    Sepetim ({selectedProductCount} Ürün)
                </h1>

                {cart.length === 0 ? (
                    <div className="rounded bg-white p-10 text-center shadow-sm">
                        <p className="text-[#737373]">
                            Sepetinizde ürün bulunmuyor.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

                        <div className="space-y-5">
                            {cart.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="grid grid-cols-[auto_100px_1fr_auto_auto] items-center gap-5 rounded border border-[#E8E8E8] bg-white p-6"
                                >
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() =>
                                            dispatch(
                                                toggleCartItem(
                                                    item.product.id
                                                )
                                            )
                                        }
                                        className="h-5 w-5 cursor-pointer accent-[#23A6F0]"
                                    />

                                    <img
                                        src={
                                            item.product.images?.[0]
                                                ?.url
                                        }
                                        alt={item.product.name}
                                        className="h-28 w-24 rounded object-cover"
                                    />

                                    <div>
                                        <h3 className="mb-2 text-base font-bold text-[#252B42]">
                                            {item.product.name}
                                        </h3>

                                        <p className="line-clamp-2 max-w-[430px] text-sm leading-6 text-[#737373]">
                                            {
                                                item.product
                                                    .description
                                            }
                                        </p>

                                        <p className="mt-2 text-xs text-[#737373]">
                                            Stock:{" "}
                                            {item.product.stock}
                                        </p>
                                    </div>

                                    <div className="flex items-center rounded border border-[#E8E8E8]">
                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    decreaseCartItem(
                                                        item.product.id
                                                    )
                                                )
                                            }
                                            disabled={item.count === 1}
                                            className="flex h-10 w-10 items-center justify-center disabled:opacity-30"
                                        >
                                            <Minus size={16} />
                                        </button>

                                        <span className="flex h-10 min-w-12 items-center justify-center border-x border-[#E8E8E8] font-bold">
                                            {item.count}
                                        </span>

                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    increaseCartItem(
                                                        item.product.id
                                                    )
                                                )
                                            }
                                            className="flex h-10 w-10 items-center justify-center text-[#E77C40]"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <p className="min-w-[100px] text-right text-lg font-bold text-[#E77C40]">
                                            $
                                            {(
                                                item.product.price *
                                                item.count
                                            ).toFixed(2)}
                                        </p>

                                        <button
                                            onClick={() =>
                                                dispatch(
                                                    removeCartItem(
                                                        item.product.id
                                                    )
                                                )
                                            }
                                            className="text-[#737373] transition hover:text-red-500"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-fit lg:sticky lg:top-6">

                            <div className="rounded border border-[#E8E8E8] bg-white p-5 shadow-sm">
                                <h2 className="mb-5 text-xl font-medium text-[#252B42]">
                                    Sipariş Özeti
                                </h2>

                                <div className="space-y-3 text-sm">

                                    <div className="flex items-center justify-between">
                                        <span className="text-[#737373]">
                                            Ürünlerin Toplamı
                                        </span>

                                        <span className="font-bold text-[#252B42]">
                                            ${productsTotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-[#737373]">
                                            Kargo Toplam
                                        </span>

                                        <span className="font-bold text-[#252B42]">
                                            ${shippingPrice.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex items-start justify-between gap-4">
                                        <span className="max-w-[170px] text-[#737373]">
                                            150 TL ve Üzeri Kargo Bedava
                                        </span>

                                        <span className="whitespace-nowrap font-bold text-[#E77C40]">
                                            -${discount.toFixed(2)}
                                        </span>
                                    </div>

                                </div>

                                <div className="my-5 border-t border-[#E8E8E8]" />

                                <div className="flex items-center justify-between">
                                    <span className="text-base font-bold text-[#252B42]">
                                        Toplam
                                    </span>

                                    <span className="text-xl font-bold text-[#E77C40]">
                                        ${grandTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="mt-4 flex w-full items-center justify-center gap-3 rounded border border-[#E8E8E8] bg-white px-4 py-3 text-sm font-bold text-[#252B42] transition hover:bg-[#FAFAFA]"
                            >
                                <span className="text-xl font-bold text-[#E77C40]">
                                    +
                                </span>

                                <span>
                                    İNDİRİM KODU GİR
                                </span>
                            </button>
                            <Link
                                to="/create-order"
                                className="mt-4 block w-full rounded bg-[#E77C40] px-4 py-3 text-center text-sm font-bold !text-white !no-underline transition hover:bg-[#d86d32]"
                            >
                                Sepeti Onayla
                            </Link>

                        </div>

                    </div>
                )}

            </div>
        </section>
    );
};

export default ShoppingCart;