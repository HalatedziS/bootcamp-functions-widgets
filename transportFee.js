function transportFee(shift) {
    if (shift === 'morning') return 'R20';
    if (shift === 'afternoon') return 'R10';
    if (shift === 'night') return 'R15';
    return 'Invalid shift';
}

function transportFeeWidget() {
    return {
        shift: '',
        fee: '',
        calculateFee() {
            this.fee = transportFee(this.shift);
        }
    }
}
