export const currency = (code) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: code||'HRK',
});