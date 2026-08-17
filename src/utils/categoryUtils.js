export const getCategoryGender = (category) => {
    if (category.code) {
        const gender = category.code.split(":")[0];

        if (gender === "kadin" || gender === "kadın" || gender === "k") {
            return "kadin";
        }

        if (gender === "erkek" || gender === "e") {
            return "erkek";
        }
    }

    if (category.gender === "k") {
        return "kadin";
    }

    if (category.gender === "e") {
        return "erkek";
    }

    return category.gender?.toLowerCase();
};


export const getCategoryName = (category) => {
    if (category.code?.includes(":")) {
        return category.code.split(":")[1];
    }

    return category.title
        .toLocaleLowerCase("tr-TR")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/\s+/g, "-");
};


export const getCategoryUrl = (category) => {
    const gender = getCategoryGender(category);
    const categoryName = getCategoryName(category);

    return `/shop/${gender}/${categoryName}/${category.id}`;
};