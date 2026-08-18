import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CreditCard,
    Pencil,
    Plus,
    Trash2,
} from "lucide-react";

import {
    fetchCreditCards,
    deleteCreditCard,
} from "../../store/actions/clientActions";

import CardForm from "../../components/order/CardForm";

const PaymentStep = () => {
    const dispatch = useDispatch();

    const creditCards = useSelector(
        (state) => state.client.creditCards
    );

    const [selectedCardId, setSelectedCardId] =
        useState(null);

    const [showCardForm, setShowCardForm] =
        useState(false);

    const [editingCard, setEditingCard] =
        useState(null);

    useEffect(() => {
        dispatch(fetchCreditCards());
    }, [dispatch]);

    const maskCardNumber = (cardNo) => {
        if (!cardNo) {
            return "";
        }

        return `${cardNo.slice(0, 4)} **** **** ${cardNo.slice(-4)}`;
    };

    const handleAddCard = () => {
        setEditingCard(null);
        setShowCardForm(true);
    };

    const handleEditCard = (
        event,
        card
    ) => {
        event.stopPropagation();

        setEditingCard(card);
        setShowCardForm(true);
    };

    const handleDeleteCard = async (
        event,
        cardId
    ) => {
        event.stopPropagation();

        await dispatch(
            deleteCreditCard(cardId)
        );

        if (selectedCardId === cardId) {
            setSelectedCardId(null);
        }
    };

    const selectedCard = creditCards.find(
        (card) => card.id === selectedCardId
    );

    return (
        <div className="overflow-hidden rounded border border-[#E8E8E8] bg-white">

            {/* PAYMENT TYPE HEADER */}
            <div className="flex items-start gap-4 border-b border-[#E8E8E8] p-7">

                <input
                    type="radio"
                    checked
                    readOnly
                    className="mt-1 h-5 w-5 shrink-0 accent-[#E77C40]"
                />

                <div>
                    <h2 className="text-2xl font-bold text-[#252B42]">
                        Kart ile Öde
                    </h2>

                    <p className="mt-2 max-w-[700px] text-sm leading-6 text-[#737373]">
                        Kart ile ödemeyi seçtiniz. Banka veya Kredi Kartı kullanarak
                        ödemenizi güvenle yapabilirsiniz.
                    </p>
                </div>

            </div>

            {/* MAIN PAYMENT AREA */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">

                {/* LEFT SIDE - CARDS */}
                <div className="border-r border-[#E8E8E8] p-8">

                    <div className="mb-7 flex items-start justify-between gap-6">

                        <h3 className="text-2xl font-medium text-[#252B42]">
                            Kart Bilgileri
                        </h3>

                        <button
                            type="button"
                            onClick={handleAddCard}
                            className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#737373] underline transition hover:text-[#E77C40]"
                        >
                            <Plus size={16} />

                            Başka bir Kart ile Ödeme Yap
                        </button>

                    </div>

                    {/* ADD / EDIT CARD FORM */}
                    {showCardForm && (
                        <div className="mb-7">
                            <CardForm
                                editingCard={
                                    editingCard
                                }
                                onClose={() => {
                                    setShowCardForm(
                                        false
                                    );

                                    setEditingCard(
                                        null
                                    );
                                }}
                            />
                        </div>
                    )}

                    {/* SAVED CARDS */}
                    {creditCards.length === 0 ? (
                        <div className="rounded border border-dashed border-[#BDBDBD] p-10 text-center">

                            <CreditCard
                                size={34}
                                className="mx-auto mb-4 text-[#BDBDBD]"
                            />

                            <p className="text-sm text-[#737373]">
                                Kayıtlı kartınız bulunmuyor.
                            </p>

                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5">

                            {creditCards.map((card) => (
                                <div
                                    key={card.id}
                                    onClick={() =>
                                        setSelectedCardId(
                                            card.id
                                        )
                                    }
                                    className={`cursor-pointer rounded border p-5 transition ${selectedCardId ===
                                            card.id
                                            ? "border-2 border-[#E77C40] bg-[#FFF7F0]"
                                            : "border-[#E8E8E8] bg-white hover:border-[#D6D6D6]"
                                        }`}
                                >

                                    {/* CARD TOP */}
                                    <div className="mb-5 flex items-center justify-between">

                                        <div className="flex items-center gap-3">

                                            <input
                                                type="radio"
                                                checked={
                                                    selectedCardId ===
                                                    card.id
                                                }
                                                onChange={() =>
                                                    setSelectedCardId(
                                                        card.id
                                                    )
                                                }
                                                className="h-4 w-4 accent-[#E77C40]"
                                            />

                                            <span className="text-sm font-bold text-[#252B42]">
                                                Kayıtlı Kartım
                                            </span>

                                        </div>

                                        <div className="flex items-center gap-3">

                                            <button
                                                type="button"
                                                onClick={(
                                                    event
                                                ) =>
                                                    handleEditCard(
                                                        event,
                                                        card
                                                    )
                                                }
                                                className="text-[#737373] transition hover:text-[#23A6F0]"
                                            >
                                                <Pencil
                                                    size={16}
                                                />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={(
                                                    event
                                                ) =>
                                                    handleDeleteCard(
                                                        event,
                                                        card.id
                                                    )
                                                }
                                                className="text-[#737373] transition hover:text-red-500"
                                            >
                                                <Trash2
                                                    size={16}
                                                />
                                            </button>

                                        </div>

                                    </div>

                                    {/* CARD DESIGN */}
                                    <div className="rounded border border-[#E8E8E8] bg-white p-6">

                                        <p className="mb-7 text-sm font-bold uppercase tracking-wide text-[#252B42]">
                                            {
                                                card.name_on_card
                                            }
                                        </p>

                                        <p className="whitespace-nowrap text-lg font-bold tracking-wider text-[#252B42]">
                                            {maskCardNumber(
                                                card.card_no
                                            )}
                                        </p>

                                        <p className="mt-5 text-sm text-[#737373]">
                                            Son Kullanma:{" "}
                                            {String(
                                                card.expire_month
                                            ).padStart(
                                                2,
                                                "0"
                                            )}
                                            /
                                            {
                                                card.expire_year
                                            }
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>
                    )}

                    {/* 3D SECURE */}
                    <label className="mt-7 flex cursor-pointer items-center gap-3 text-sm font-bold text-[#252B42]">

                        <input
                            type="checkbox"
                            className="h-5 w-5 accent-[#E77C40]"
                        />

                        3D Secure ile ödemek istiyorum.

                    </label>

                </div>

                {/* RIGHT SIDE - INSTALLMENT */}
                <div className="p-8">

                    <h3 className="text-2xl font-bold text-[#252B42]">
                        Taksit Seçenekleri
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#737373]">
                        Kartınıza uygun taksit seçeneğini seçiniz.
                    </p>

                    {!selectedCard ? (
                        <div className="mt-7 rounded border border-dashed border-[#BDBDBD] p-10 text-center">

                            <p className="text-sm leading-6 text-[#737373]">
                                Taksit seçeneklerini görmek için kayıtlı kartlardan
                                birini seçiniz.
                            </p>

                        </div>
                    ) : (
                        <div className="mt-7 overflow-hidden rounded border border-[#E8E8E8]">

                            {/* TABLE HEADER */}
                            <div className="grid grid-cols-2 bg-[#FAFAFA] px-5 py-4 text-sm font-bold text-[#252B42]">

                                <span>
                                    Taksit Sayısı
                                </span>

                                <span>
                                    Aylık Ödeme
                                </span>

                            </div>

                            {/* SINGLE PAYMENT */}
                            <label className="grid cursor-pointer grid-cols-2 items-center border-t border-[#E8E8E8] px-5 py-5">

                                <span className="flex items-center gap-3 font-bold text-[#E77C40]">

                                    <input
                                        type="radio"
                                        defaultChecked
                                        className="h-4 w-4 accent-[#E77C40]"
                                    />

                                    Tek Çekim

                                </span>

                                <span className="font-bold text-[#E77C40]">
                                    Tek Çekim
                                </span>

                            </label>

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};

export default PaymentStep;