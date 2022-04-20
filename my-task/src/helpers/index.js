export const Util = {
    formatCurrency: (amount, currency) => {
        return Number(amount).toLocaleString(amount || currency === "TRY" ? "tr-TR" : "en-EN", { style: "currency", currency })
    }
} 