/**
 * Calculates the weighted sum of pairs of numbers and quantities,
 * applying a markup based on the number value.
 * 
 * @param {Array} pairsArray - Array of objects with number and quantity.
 * @returns {Object} Result containing detailed calculations and the total sum.
 */
export function calculateWeightedSum(pairsArray) {
    let newTotalSum = 0;
    let details = pairsArray.map(({ number, quantity }) => {
        // Apply markup based on the number value.
        let markedUpNumber = number < 50 ? number * 2 : number * 1.3;
        const total = markedUpNumber * quantity;
        newTotalSum += total;

        // Return a descriptive string for each calculation.
        return {
            detail: `${number !== markedUpNumber ? `${number} marked up to ${markedUpNumber.toFixed(2)}` : number} (quantity: ${quantity}) = ${total.toFixed(2)}`,
            subtotal: total
        };
    });

    return {
        details: details,
        totalSum: newTotalSum
    };
}
